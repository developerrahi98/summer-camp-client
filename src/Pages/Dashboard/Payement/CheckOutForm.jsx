import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import useCart from "../../../Hooks/useCart";

const CheckOutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cart] = useCart();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const {user} = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId,setTransactionId] = useState("");
  useEffect(()=>{
   if(price >0){
    axiosSecure.post('/create-payment-intent', {price})
    .then(res =>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
    })
   }
  },[price, axiosSecure])
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    setProcessing(true);

    const {paymentIntent, error:confirmError}= await stripe.confirmCardPayment(
       clientSecret, 
        {
            payment_method:{
                card: card,
                billing_details: {
                    email: user?.email|| 'anonymous',
                    name: user?.displayName||  'anonymous'
                },
            },
        },
    )
    if(confirmError){
        console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);

    if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id) 
        const payment = {
            email: user?.email,
            transactionId : paymentIntent.id,
            price,
            date: new Date(),
            quantity: cart.length,
            cartItems : cart.map(item => item._id),
            selectedItems: cart.map(item => item.selectedItemId),
            orderStatus: 'service pending',
            itemsName : cart.map(item => item.name),
         }
         axiosSecure.post('/payments', payment)
         .then(res => {
            console.log(res.data);
            if(res.data.insertedId) {
                // 
            }
         })
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
        className="border border-[#0C4B65] border-3  p-4"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn my-5 bg-yellow-500 text-red-700 font-bold text-xl px-8"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-600">{cardError}</p>
      }
      {
        transactionId && <p className="text-green-600"> Transaction complete successfully with Transaction Id : {transactionId}</p>
      }
    </>
  );
};

export default CheckOutForm;

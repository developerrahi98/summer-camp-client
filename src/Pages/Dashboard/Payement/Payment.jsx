import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../../Hooks/useCart";


const stripePromise = loadStripe('pk_test_51NIqtxGhozHSO42RwYWz7hWMW2n5TltDL9XN3ihjytghRV0sYqArtQEJSNcD0WUjxsocKC5AgnozqCC4W0TecRGN00ofxzGi4R')
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum,item)=> sum + item.price,0)
    const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-1/2 mx-auto h-full mt-28">
      <h1 className="text-[#0C4B65] font-extrabold text-3xl text-center mb-10 ">Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckOutForm  price={price} ></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;

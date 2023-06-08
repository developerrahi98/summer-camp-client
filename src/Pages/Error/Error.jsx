import { Link } from 'react-router-dom';
import img from '../../assets/Logo/oops-404-error-with-broken-robot-concept-illustration_114360-1932.avif'

const Error = () => {
    return (
        <div id="error-page" className='flex justify-center items-center flex-col pt-7'>
        <h1 className='text-3xl font-extrabold'>Oops!</h1>
        <p className='text-3xl font-extrabold'>Sorry, an unexpected error has occurred.</p>
        <img className='w-1/3' src={img} alt="" />
        <button className="btn btn-wide"><Link to='/'>Go Back</Link></button>
      </div>
    );
};

export default Error;
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
    /* Main div */
<div className='main-logo bg-domo-bg'>

    {/* header div for logos and icons */}
    <div className='flex items-center justify-between p-4'>
        {/* div for logos */}
        <div className='bg-domo-bg w-[100px] h-[100px] ml-8'>
            <a href="Home.tsx">
            <img src='/assets/domoro.imgs/Dom_final_logo.png' alt="domoro logo">
               </img>
             </a>  
        </div> 
        <div className='tagline bg-domo-bg flex items-center justify-between p-4 ml-30'>
             <a href="Home.tsx">
            <img src='/assets/domoro.imgs/Domoro2.png' alt="domoro tag logo">
               </img>
            </a>
       </div>


        {/* div for icons */}
    <div className='flex items-center justify-between mr-8 icons bg-domo-bg'>
         <a className='w-[90px] h-[90px]' href="Order.tsx">
        <img src='/assets/domoro.imgs/cart.png' alt='add to cart'  >
           </img>
        </a>

         <a className='w-[90px] h-[90px]' href="Home.tsx">
        <img src='/assets/domoro.imgs/call.png' alt='call us'  >
           </img>
        </a>

         <a className='w-[90px] h-[90px]' href="Home.tsx">
        <img src='/assets/domoro.imgs/login.png' alt='login to account'  >
           </img>
        </a>
    </div> 

    </div>
        {/* web menu nav */}  
        <nav className="bg-nav-domo p-6 font-domo-head text-center" >
          <Link to="/" className="text-white p-6">Home</Link>
          <Link to="/menu" className="text-white p-6">Menu</Link>
          <Link to="/order" className="text-white p-6">Order Online</Link>
          <Link to="/reserve" className="text-white p-6 ">Reservation</Link>
          <Link to="/cater" className="text-white p-6 ">Catering</Link>
          <Link to="/about" className="text-white p-6 ">About</Link>
          <Link to="/contact" className="text-white p-6 ">Contact Us</Link>
        </nav>
</div> 
    );
}

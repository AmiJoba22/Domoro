import { Link } from 'react-router-dom';
export default function Footer() {
    return (

<div>
      <div className='bg-nav-domo'>
        <a href="Home.tsx">
            <img className= 'w-[100px] h-[100px] flex items-center justify-between ml-20' src='/assets/domoro.imgs/Dom_final_logo.png' alt="domoro logo">
               </img>
             </a> 
        <p className= 'text-white font-domo-head flex items-center justify-between ml-20'> Get a taste of The Gambia right here in NYC.<br></br> We keep the culture alive.<br></br> Order some tatsy foods today!</p>
        <br>
        </br>
        <button className='text-white font-domo-head ml-20'> BACK TO TOP </button>

        <div className='bg-nav-domo text-center text-white font-domo-head'>  
        <p> Copyright © 2024 Domoro™</p>
      </div>
      </div>
      
   
</div>


    );
}
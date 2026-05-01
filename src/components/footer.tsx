import { Link } from 'react-router-dom';
export default function Footer() {
    return (

<div>
      <div className='bg-nav-domo'>
        <a href="Home.tsx">
            <img className= 'w-[100px] h-[100px]' src='/assets/domoro.imgs/Dom_final_logo.png' alt="domoro logo">
               </img>
             </a> 
        <p className= 'text-white font-domo-head'> Get a taste of The Gambia right here in NYC.<br></br> We keep the culture alive.<br></br> Order some tatsy foods today!</p>
      </div>

      <div className='bg-domo-bg text-white'>  
        <p> Copyright © 2024 Domoro™</p>
        <p>Email:Domoro@restaurants.org</p>
      </div>
   
</div>


    );
}
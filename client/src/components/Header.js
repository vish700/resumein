import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header'> 
         <div className='header__bar'> 
         <div className='logo'> 
         <img src="/head.png" />
         </div> 
          
       <div className="header__option"> 
          
            <div className="header__optionLineTwo"> 
            <div style={{color: 'black'}} className="p-4 box mt-1 css text-center"> 
               Hello Welcome <br /> 
                
             </div> 
            </div> 
             
            </div> 
             
        
          
      </div> 
    </div>
  )
}

export default Header
import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();


    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img  className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg' alt='' />
        
        {basket?.length === 0 ? (
         <div>
             <h2>Your Shopping basket is empty</h2>
             <p>'You have no items in your basket.To buy one or more click on "Add to Basket" next to item.'</p>
         </div>
        ) : (
          <div>
              <h2 className='checkout__title'>your Shopping basket</h2>
             {basket.map((item) => (
       
            <CheckoutProduct 
             id= {item.id}
             title= {item.title}
             image= {item.image}
             price= {item.price}
             rating= {item.rating}
            />
                
             ))}
             </div>
        )}
        </div>
        {basket.length > 0 && (
            <div className='checkout__right'>
              <Subtotal />
            </div>
        )}
        </div>
    )
}

export default Checkout;

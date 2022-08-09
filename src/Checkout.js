import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_banner'>
                
                {
                    basket?.length > 0 &&(
                        <div className='checkout_banner_right'>
                            <Subtotal/>
                        </div>
                    )
                }
            </div>
            <div className='checkout_body'>
            {
            basket?.length ===  0 ? (
                <div>
                    <h2>Basket is empty</h2>
                    <p>You can add items to your basket by clicking on add to basket</p>
                </div>
            ):(
                <div className=''>
                    <h2 className='checkout_title'>Shopping basket</h2>
                    {
                        basket?.map(item => (
                            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                        ))
                    }
                </div>
            )
            }
            </div>
            
            

            
        </div>
    )
}

export default Checkout

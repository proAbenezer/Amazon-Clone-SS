import React from 'react'

//Global Context
import { useStateValue } from '../../main'

//Checkout Styles
import './Checkout.css'

//Components
import Subtotal from '../../components/Subtotal/Subtotal'
import CheckoutProudct from '../../components/CheckoutProduct/CheckoutProudct'




function checkout() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img
                    src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
                    alt="Checkout Page Ad Banner "
                    className="checkout__ad--banner"
                />

                {basket?.length === 0
                    ? (
                        <div className='checkout__title'>
                            <h3>Your Basket is EMPTY for now</h3>
                            <br />
                            <p>
                                You have no item in your basket. To buy one or more item
                                Click "Add to basket" button on the item box
                            </p>
                        </div>
                    )
                    : (
                        <div>
                            <h3 className='checkout__title'>Your Shopping Basket</h3>
                            {
                                basket.map(item => (
                                    <CheckoutProudct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))
                            }
                        </div>
                    )

                }
            </div>
            {basket?.length > 0 &&
                <div className="checkout__right">
                    <Subtotal />
                </div>
            }
        </div>
    )
}

export default checkout
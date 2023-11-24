import React from 'react'


//CheckoutProduct Styles
import './CheckoutProduct.css'
import { useStateValue } from '../../main'

function CheckoutProudct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({ type: 'REMOVE_TO_BASKET', id: id })
        console.log(basket)
    }
    return (
        <div
            className='checkoutProduct'
            key={id}
        >
            <img
                src={image}
                alt="Check out Product image"
                className="checkoutProduct__image"
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => {
                                return <p>⭐</p>
                            })
                    }
                </div>

                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProudct
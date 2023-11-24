import React from 'react'


//Product Style
import './Product.css'
//Global State
import { useStateValue } from '../../main'
function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET', item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    const ratingStars = Math.round(rating)

    return (
        <div className='product' key={id}>
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div
                    className="product__rating"
                >
                    {
                        Array(Math.round(rating.rate))
                            .fill()
                            .map((_) => {
                                return <p>⭐</p>
                            })
                    }
                </div>
            </div>
            <img src={image} alt="product image" />
            <button onClick={addToBasket}>Add to baskt</button>
        </div>
    )
}

export default Product
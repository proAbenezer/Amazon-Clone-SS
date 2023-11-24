import React from 'react'

//React-Currency-Format
import CurrencyFormat from 'react-currency-format'


//Subtotal Styles
import './Subtotal.css'
import { useStateValue } from '../../main'
import { getBasketTotal } from '../../ContextApi/reducer'

function Subtotal() {

    const [{ basket }] = useStateValue()
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => {
                    return (
                        <>
                            <p>
                                Subtotal ({basket.length} item): <strong>{value}</strong>
                            </p>
                            <small className='subtotal__gift'>
                                <input type="checkbox" />  This order contains gift
                            </small>
                        </>
                    )
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal 
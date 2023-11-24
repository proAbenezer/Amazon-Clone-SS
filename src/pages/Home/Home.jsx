import React from 'react'


//Home Styles
import './Home.css'
import Product from '../../components/Products/Product'

//Axios
import useAxios from '../../useAxios/useAxios'

function Home() {
    const { isPending, isErr, err, data } = useAxios('https://fakestoreapi.com/products?sort=desc')
    return (
        <div className="home">
            <img
                className="home__image--banner"
                src='https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg'
            />
            {isPending && <h1 className='home__loading--title'>Loading Products.... Please waite</h1>}
            {isErr && err.toString()}
            <div className="home__row">
                {data && data.map(item => {
                    return (< Product
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    />)
                })}
            </div>
        </div>
    )
}

export default Home

/*     < Product
id = { 7}
title = "The Lean Startup: How Today&#39;s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
price = { 11.96}
rating = { 5}
image = 'https://m.media-amazon.com/images/I/61bvxr3CJiL._SY342_.jpg'
    /> */
import React, { useState } from 'react'

//import Link
import { Link } from 'react-router-dom';
//Header Styles
import './Header.css'


//Icons
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { LocationOn } from '@mui/icons-material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
//Custom Hook
import { useStateValue } from '../../main';

//Context
import { auth } from '../../Firebase/Firebase';

function Header() {
    const [{ basket, user }] = useStateValue();

    const loginHandler = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <nav className="header">
            <Link to='/'>
                <img
                    src='src/assets/Images/amazon-logo.png'
                    alt="amazon Clone"
                    className="header__logo"
                />
            </Link>
            <div className="header">
                <Link to={!user && '/login'} className='header__Link'>
                    <div onClick={loginHandler} className="header__option header__location--container">
                        <div className="header__option--wrapper">
                            <LocationOn className='header__Location--icon' />
                            <div className="header__option--span">
                                <span className='header__optionLineOne'>Deliver to</span>
                                <span className='header__optionLineTwo'>  Ethiopia</span>
                            </div>
                        </div>

                    </div>
                </Link>
            </div>
            <div className="header__search">
                <div className="header__select--container">
                    <select className='header__select'>
                        <option>All</option>
                        <option>Computer</option>
                    </select>
                </div>
                <div className="header__searchInput--container">
                    <input
                        type="text"
                        className="header__searchInput"
                        placeholder='Search for Amazon'
                    />
                </div>

                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'} className='header__Link'>
                    <div onClick={loginHandler} className="header__option">
                        <span className='header__optionLineOne'>Hello {user?.email.split('@gmail.com').join('')}</span>
                        <span className='header__optionLineTwo'>Sign {user ? 'Out ' : 'In '}</span>
                    </div>
                </Link>
                <Link to='/checkout' className='header__Link'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Return </span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <Link to='/login' className='header__Link'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout' className='header__Link'>
                    <div className="header__optinBasket">
                        <ShoppingBasketIcon />
                        <span
                            className='header__optionLineTwo header__BasketCount'
                        >{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
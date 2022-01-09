import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { VscSearch } from "react-icons/vsc";
import { BiBasket } from "react-icons/bi";
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();
    console.log(basket);
    return ( 
    <nav className="header">
        <Link>
            <img className='header__logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' alt="okk" />
        </Link>
        <div className='headersearch'>
        <input type="text" className='header_text' />
        <VscSearch className='headerIcon' />
        </div>
         {/*1link*/}
         <div className='header__navbar'>
        <Link to='/login' className='header__link'>
        <div className="header__option">
             <span className='headeroption1'>HELLO</span>
             <span className='headeroption2'>Sign in</span>
        </div>
        </Link>
        {/*link2*/}
        <Link to='/login' className='header__link'>
        <div className="header__option">
             <span className='headeroption1'>Returns</span>
             <span className='headeroption2'>Orders</span>
        </div>
        </Link>
        {/*3link*/}
        <Link to='/login' className='header__link'>
        <div className="header__option">
             <span className='headeroption1'>Your</span>
             <span className='headeroption2'> Prime</span>
        </div>
        </Link>
        {/*4 link */}
        <Link to ="/checkout" className='header__link'>
            <div className='header__basket'>
             <BiBasket  />
             <span className='header__basketcount'>
                 {basket?.length}
                 </span>
            </div>
        </Link>
        </div>
        </nav>    
    )
    }

export default Header

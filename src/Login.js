import React from 'react';
import './Login.css';
import {Link , useHistory} from 'react-router-dom';

export default function Login() {
    return (
        <div className='login'>
           <Link to='/'>
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' alt='' />
           </Link>
           <div className='login__container'>
               <h1>Sign in</h1>
               <form>
                   <h5>email</h5>
                   <input type='text' />
                   <h5>Password</h5>
                   <input type='text' />
                   <button className='login__signInButton'>Sign in</button>
               </form>
               <p>By signing in you agree amazon terms&condition of use.Please see our privacy notice our cokkie notice and our intrest based ads notice..</p>
               <button className='login__registerButton'>Create your amazon account</button>
           </div>
        </div>
    )
}

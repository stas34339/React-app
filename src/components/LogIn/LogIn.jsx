import { useState } from 'react'
import './LogIn.scss'
import './LogIn-extention.scss'
import { FiXCircle } from "react-icons/fi"

function LogIn() {
    return (
      <main className='login'>
        <div className="login__container">
            <div className="login-form-error">
                <button className="login-form-error__close-btn">
                    <FiXCircle/>
                </button>
                <h1 className='login-form-error__title'>Oops, something went wrong! Try again:)</h1>
                <button className='login-form-error__again-btn'>TRY AGAIN</button>
            </div>
            <div className="login__block">
                <div className="login__image">
                    
                </div>
                <div className="login__form">
                    <h1 className='login__title'>stay up to date</h1>
                    <form action="#" className='form-login' id='form-login'>
                        <p className='form-login__error'>Incorrect login. Try again</p>
                        <input className='form-login__input' type="text" placeholder='Enter your login' form='form-login'/>
                        <input className='form-login__input' type="password" placeholder='Enter your password' form='form-login'/>
                        <button className='form-login__btn' type='submit' form='form-login'>Log in</button>
                        <p className='form-login__sub-form'>Not an account? <a href="#">Sign up</a></p>
                    </form>
                </div>
            </div>
        </div>
      </main>
    );
  }
  
  export default LogIn;
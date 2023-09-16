import { useState } from 'react'
import './LogIn.css'
import { FiXCircle } from "react-icons/fi"

function LogIn() {
    return (
      <main className='LogIn'>
        <div className="container-LogIn">
            <div className="errform">
                <button className="formclose">
                    <FiXCircle/>
                </button>
                <h1>Oops, something went wrong! Try again:)</h1>
                <button className='btn-again'>TRY AGAIN</button>
            </div>
            <div className="LogIn-block">
                <div className="image">
                    
                </div>
                <div className="login">
                    <h1>stay up to date</h1>
                    <form action="#">
                        <p className='logerr'>Incorrect login. Try again</p>
                        <input type="text" placeholder='Enter your login'/>
                        <input type="text" placeholder='Enter your password'/>
                        <button>Log in</button>
                    </form>
                    <p>Not an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>
      </main>
    );
  }
  
  export default LogIn;
import { useState } from 'react'
import './SignUp.css'
import { FiXCircle } from "react-icons/fi"

function SignUp() {
    return (
        <main className='SignUp'>
            <div className="container-SignUp">
                <div className="errform">
                    <button className='formclose'>
                        <FiXCircle/>
                    </button>
                    <h1>Oops, something went wrong! Try again:)</h1>
                    <button className='btn-again'>TRY AGAIN</button>
                </div>
                <div className="SignUp-block">
                    <div className="image">

                    </div>
                    <div className="signup">
                        <h1>Tell the world your interesting story</h1>
                        <form action="#">
                            <p className='signuperr'>Incorrect login. Try again</p>
                            <input type="text" placeholder='Enter your login'/>
                            <input type="text" placeholder='Enter your password'/>
                            <input type="text" placeholder='Enter your password again'/>
                            <button>Sign up</button>
                        </form>
                        <p>Already registered? <a href="#">Log in</a></p>
                    </div>
                </div>
            </div>
        </main>
    );
  }
  
  export default SignUp;
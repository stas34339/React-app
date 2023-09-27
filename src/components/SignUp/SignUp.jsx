import './SignUp.scss'
import './SignUp-extention.scss'
import { FiXCircle } from "react-icons/fi"

function SignUp() {
    return (
        <main className='signup'>
            <div className="signup__container">
                <div className="signup-form-error">
                    <button className='signup-form-error__close-btn'>
                        <FiXCircle/>
                    </button>
                    <h1 className='signup-form-error__title'>Oops, something went wrong! Try again:)</h1>
                    <button className='signup-form-error__again-btn'>TRY AGAIN</button>
                </div>
                <div className="signup__block">
                    <div className="signup__image">

                    </div>
                    <div className="signup__form">
                        <h1 className='signup__title'>Tell the world your interesting story</h1>
                        <form action="#" className='form-signup'>
                            <p className='form-signup__error'>Incorrect login. Try again</p>
                            <input className='form-signup__input' type="text" placeholder='Enter your login'/>
                            <input className='form-signup__input' type="password" placeholder='Enter your password'/>
                            <input className='form-signup__input' type="password" placeholder='Enter your password again'/>
                            <button className='form-signup__btn' type='submit'>Sign up</button>
                            <p className='form-signup__sub-form'>Already registered? <a href="#">Log in</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
  }
  
  export default SignUp;
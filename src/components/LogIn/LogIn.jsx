import s from './LogIn.module.scss'
import { FiXCircle } from "react-icons/fi"

function LogIn() {
    return (
      <main className={s.login}>
        <div className={s.login__container}>
            <div className={s.login_form_error}>
                <button className={s.login_form_error__close_btn}>
                    <FiXCircle/>
                </button>
                <h1 className={s.login_form_error__title}>Oops, something went wrong! Try again:)</h1>
                <button className={s.login_form_error__again_btn}>TRY AGAIN</button>
            </div>
            <div className={s.login__block}>
                <div className={s.login__image}>
                    
                </div>
                <div className={s.login_form}>
                    <h1 className={s.login_form__title}>stay up to date</h1>
                    <form action="#" className={s.login_form__block} id='form-login'>
                        <p className={s.login_form__error}>Incorrect login. Try again</p>
                        <input className={s.login_form__input} type="text" placeholder='Enter your login' form='form-login'/>
                        <input className={s.login_form__input} type="password" placeholder='Enter your password' form='form-login'/>
                        <button className={s.login_form__btn} type='submit' form='form-login'>Log in</button>
                        <p className={s.login_form__sub_form}>Not an account? <a href="#">Sign up</a></p>
                    </form>
                </div>
            </div>
        </div>
      </main>
    );
  }
  
  export default LogIn;
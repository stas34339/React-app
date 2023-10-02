import s from './SignUp.module.scss'
import { FiXCircle } from "react-icons/fi"

function SignUp() {
    return (
        <main className={s.signup}>
            <div className={s.signup__container}>
                <div className={s.signup_form_error}>
                    <button className={s.signup_form_error__close_btn}>
                        <FiXCircle/>
                    </button>
                    <h1 className={s.signup_form_error__title}>Oops, something went wrong! Try again:)</h1>
                    <button className={s.signup_form_error__again_btn}>TRY AGAIN</button>
                </div>
                <div className={s.signup__block}>
                    <div className={s.signup__image}>

                    </div>
                    <div className={s.signup__form}>
                        <h1 className={s.signup__title}>Tell the world your interesting story</h1>
                        <form action="#" className={s.form_signup}>
                            <p className={s.form_signup__error}>Incorrect login. Try again</p>
                            <input className={s.form_signup__input} type="text" placeholder='Enter your login'/>
                            <input className={s.form_signup__input} type="password" placeholder='Enter your password'/>
                            <input className={s.form_signup__input} type="password" placeholder='Enter your password again'/>
                            <button className={s.form_signup__btn} type='submit'>Sign up</button>
                            <p className={s.form_signup__sub_form}>Already registered? <a href="#">Log in</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
  }
  
  export default SignUp;
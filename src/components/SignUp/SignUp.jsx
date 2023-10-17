import s from './SignUp.module.scss'
import { FiXCircle } from "react-icons/fi"
import { useForm } from "react-hook-form"

function SignUp() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm({
        mode: 'onBlur'
      }
      )
      const onSubmit = (data) => {
        reset();
      };
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
                    <div className={s.signup_form}>
                        <form action="#" className={s.signup_form__block}>
                            <h1 className={s.signup_form__title}>Tell the world your interesting story</h1>
                            <label className={s.signup_form__label}>
                                <input className={s.signup_form__input} type="text" placeholder='Enter your login'
                                {...register('login', {required:'Incorrect login. Try again'})}/>
                                {errors?.login && <p className={s.signup_form__error}>{errors?.login.message || "Error"}</p>}
                            </label>
                            <label className={s.signup_form__label}>
                                <input className={s.signup_form__input} type="password" placeholder='Enter your password' 
                                {...register('password',{required:'Incorrect password. Try again'})}/>
                                {errors?.password && <p className={s.signup_form__error}>{errors?.password.message || "Error"}</p>}
                            </label>
                            <label className={s.signup_form__label}>
                                <input className={s.signup_form__input} type="password" placeholder='Enter your password' 
                                {...register('password_rep',{required:'Password mismatch. Try again'})}/>
                                {errors?.password_rep && <p className={s.signup_form__error}>{errors?.password_rep.message || "Error"}</p>}
                            </label>
                            <button className={s.signup_form__btn}>Sign up</button>
                            <p className={s.signup_form__sub_form}>Already registered? <a href="#">Log in</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
  }
  
  export default SignUp;
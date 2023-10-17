import s from './LogIn.module.scss'
import { FiXCircle } from "react-icons/fi"
import { useForm } from "react-hook-form"

function LogIn() {
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
                    <form className={s.login_form__block} onSubmit={handleSubmit(onSubmit)}>
                        <h1 className={s.login_form__title}>stay up to date</h1>
                        <label className={s.login_form__label}>
                            <input className={s.login_form__input} type='text' placeholder='Enter your login'
                            {...register('login', {required: "Incorrect login. Try again"})}/>
                            {errors?.login && <p className={s.login_form__error}>{errors?.login.message || "Error"}</p>}
                        </label>
                        <label className={s.login_form__label}>
                            <input className={s.login_form__input} type="password" placeholder='Enter your password'
                            {...register('password', {required:"Incorrect password. Try again"})}/>
                            {errors?.password && <p className={s.login_form__error}>{errors?.password.message || "Error"}</p>}
                        </label>
                        <button className={s.login_form__btn}>Log in</button>
                        <p className={s.login_form__sub_form}>Not an account? <a href="#">Sign up</a></p>
                    </form>
                </div>
            </div>
        </div>
      </main>
    );
  }
  
  export default LogIn;
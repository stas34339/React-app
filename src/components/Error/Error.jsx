import s from './Error.module.scss'

function Error()
{
    return(
        <main className={s.error}>
            <div className={s.error__container}>
                <div className={s.error__block}>
                    <h1 className={s.error__title}>
                        Error 404
                    </h1>
                    <p className={s.error__text}>Something seems to have gone wrong! The page you requested does not exist. It may be out of date, have been deleted or the address in the address bar may be wrong.</p>
                    <button className={s.error__btn}>
                        Go home
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Error
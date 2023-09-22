import { useState } from 'react'
import './Error.scss'
import './Error-extention.scss'

function Error()
{
    return(
        <main className="error">
            <div className="error__container">
                <div className="error__block">
                    <h1 className='error__title'>
                        Error 404
                    </h1>
                    <p className='error__text'>Something seems to have gone wrong! The page you requested does not exist. It may be out of date, have been deleted or the address in the address bar may be wrong.</p>
                    <button className='error__btn'>
                        Go home
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Error
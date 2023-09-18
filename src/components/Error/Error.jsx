import { useState } from 'react'
import './Error.css'

function Error()
{
    return(
        <main className="Error">
            <div className="container">
                <div className="Error-block">
                    <h1>
                        Error 404
                    </h1>
                    <p>Something seems to have gone wrong! The page you requested does not exist. It may be out of date, have been deleted or the address in the address bar may be wrong.</p>
                    <button>
                        Go home
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Error
import { useState } from 'react'
import './Footer.css'
import { FiSearch } from 'react-icons/fi'
function Footer()
{
    return(
        <footer>
            <div className='container'>
                <div className='footer-block'>
                    <div className='tale'>
                        tale
                    </div>
                    <div className='user'>
                        kirill borisyonok
                    </div>
                    <div className='email'>
                        <a href='#'>boravdv@mail.ru</a>
                    </div>
                    <div className='date'>
                        18 Feb 2022
                    </div>
                </div>
                <div className="footer-block-search">
                    <FiSearch />
                </div>
            </div>
        </footer>
    )
}
export default Footer
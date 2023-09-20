import { useState } from 'react'
import './Footer.scss'
import './Footer-extention.scss'
import { FiSearch } from 'react-icons/fi'
function Footer()
{
    return(
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__block'>
                    <div className='footer__tale'>
                        tale
                    </div>
                    <div className='footer__user'>
                        kirill borisyonok
                    </div>
                    <div className='footer__email'>
                        <a href='#'>boravdv@mail.ru</a>
                    </div>
                    <div className='footer__date'>
                        18 Feb 2022
                    </div>
                </div>
                <div className="footer__search">
                    <FiSearch />
                </div>
            </div>
        </footer>
    )
}
export default Footer
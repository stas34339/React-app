import './Footer.scss'
import './Footer-extention.scss'
import { FiSearch } from 'react-icons/fi'
function Footer()
{
    return(
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer-nav'>
                    <div className='footer-nav__element'>
                        tale
                    </div>
                    <div className='footer-nav__element'>
                        kirill borisyonok
                    </div>
                    <div className='footer-nav__element'>
                        <a href='#'>boravdv@mail.ru</a>
                    </div>
                    <div className='footer-nav__element'>
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
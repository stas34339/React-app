import s from './Footer.module.scss'
import { FiSearch } from 'react-icons/fi'
function Footer()
{
    return(
        <footer className={s.footer}>
            <div className={s.footer__container}>
                <div className={s.footer_nav}>
                    <div className={s.footer_nav__element}>
                        tale
                    </div>
                    <div className={s.footer_nav__element}>
                        kirill borisyonok
                    </div>
                    <div className={s.footer_nav__element}>
                        <a href='#'>boravdv@mail.ru</a>
                    </div>
                    <div className={s.footer_nav__element}>
                        18 Feb 2022
                    </div>
                </div>
                <div className={s.footer__search}>
                    <FiSearch />
                </div>
            </div>
        </footer>
    )
}
export default Footer
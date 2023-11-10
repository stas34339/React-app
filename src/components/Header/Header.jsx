import s from './Header.module.scss'
import classNames from 'classnames'
import { BiDoorOpen } from 'react-icons/bi'

function Header() {
    return (
      <header className={s.header}>
        <div className={s.header__container}>
            <div className={s.header_nav}>
                <a href="#" className={s.header_nav__logo}><img src='/assets/Subtract.png'></img></a>
                <ul className={s.header_nav__breadcrumb}>
                    <li className={classNames(s.header_nav__home, s.header_nav__element)}><a href="#">home</a></li>
                    <li className={classNames(s.header_nav__tweet, s.header_nav__element)}><a href="#">tweet</a></li>
                    <li className={classNames(s.header_nav__login, s.header_nav__element)}><a href="#">log in</a></li>
                    <li className={classNames(s.header_nav__signup, s.header_nav__element)}><a href="#">sign up</a></li>
                    <li className={classNames(s.header_nav__error, s.header_nav__element)}><a href="#">error</a></li>
                </ul>
            </div>
            <div className={classNames(s.header__login)}>
                <button className={s.header__login_btn}>
                    <p>log in</p>
                </button>
            </div>
            <div className={classNames(s.header__logout, s.header__btn_is_active)}>
                <a href='#' className={s.header__username}>
                    <div className={s.header__avatar}>

                    </div>
                    <p className={s.header__name}>
                        Kirill Borisyonok
                    </p>
                </a>
                <button className={s.header__logout_btn}>
                    <BiDoorOpen className={s.btn_item}/>
                    <p>log out</p>
                </button>
            </div>
        </div>
      </header>
    );
  }
  
  export default Header;
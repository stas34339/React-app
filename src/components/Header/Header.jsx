import './Header.scss'
import './Header_extension.scss'
import { BiDoorOpen } from 'react-icons/bi'

function Header() {
    return (
      <header className='header'>
        <div className='header__container'>
            <div className='header-nav'>
                <a href="./Main/Main.jsx" className='header-nav__logo'><img src='/assets/Subtract.png'></img></a>
                <ul className='header-nav__breadcrumb'>
                    <li className="breadcrumb-element breadcrumb-element-home breadcrumb-element-active"><a href="#">home</a></li>
                    <li className="breadcrumb-element breadcrumb-element-tweet"><a href="#">tweet</a></li>
                    <li className="breadcrumb-element breadcrumb-element-login"><a href="#">log in</a></li>
                    <li className="breadcrumb-element breadcrumb-element-signup"><a href="#">sign up</a></li>
                    <li className="breadcrumb-element breadcrumb-element-error"><a href="#">error</a></li>
                </ul>
            </div>
            <div className="header__login">
                <button className='header__btn'>
                    <p>log in</p>
                </button>
            </div>
            <div className="header__logout">
                <div className="header__username">
                    <div className="header__avatar">

                    </div>
                    <p className='header__name'>
                        Kirill Borisyonok
                    </p>
                </div>
                <button className='header__btn'>
                    <BiDoorOpen className='btn-item'/>
                    <p>log out</p>
                </button>
            </div>
        </div>
      </header>
    );
  }
  
  export default Header;
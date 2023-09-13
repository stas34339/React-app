import { useState } from 'react'
import './Header.css'

function Header() {
    return (
      <header>
        <div className='container'>
            <div className='header-block'>
                <div className='nav'>
                    <img src='/Subtract.png'></img>
                    <ul className='breadcrumb'>
                        <li class="breadcrumb-home"><a href="#">home</a></li>
                        <li class="breadcrumb-tweet"><a href="#">tweet</a></li>
                        <li class="breadcrumb-login"><a href="#">log in</a></li>
                        <li class="breadcrumb-signup"><a href="#">sign up</a></li>
                        <li class="breadcrumb-error"><a href="#">error</a></li>
                    </ul>
                </div>
                <button className='login'>
                    log in
                </button>
            </div>
        </div>
      </header>
    );
  }
  
  export default Header;
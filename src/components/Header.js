import './Header.css'
function Header() {
    return (
      <header>
        <div className='container'>
            <div className='header-block'>
                <div className='nav'>
                    <img src='/Subtract.png'></img>
                    <ul className='breadcrumb'>
                        <li className='breadcrumb-home'><a href='#'>home</a></li>
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
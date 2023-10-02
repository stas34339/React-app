import { useState } from 'react'
import './reset.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Tweet from './components/Tweet/Tweet'
import LogIn from './components/LogIn/LogIn'
import SignUp from './components/SignUp/SignUp'
import Error from './components/Error/Error'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App

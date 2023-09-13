import { useState } from 'react'
import './reset.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Tweet from './components/Tweet/Tweet'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Tweet />
      <Footer />
    </>
  )
}

export default App

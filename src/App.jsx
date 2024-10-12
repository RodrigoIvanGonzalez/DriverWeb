import './App.css'
import Header from './components/header/Header'
import Welcome from './components/welcome/Welcome'
import About from './components/about/About'
import Travel from './components/travel/Travel'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'



function App() {


  return (
    <>
      <Header />

      <main className='main'>
        <Welcome />
        <About />
        <Travel />
        <Contact /> 
    </main>

      <Footer />  
      <Scrollup />
    </>
  )
}

export default App

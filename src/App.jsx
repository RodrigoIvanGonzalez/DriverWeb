
import './App.css'
import Header from './components/header/Header'
import Welcome from './components/welcome/Welcome'
import About from './components/about/About'
// import Travel from './components/travel/Travel'
// import Tips from './components/tips/Tips'
import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'



function App() {


  return (
    <>
      <Header />

      <main className='main'>
        <Welcome />
        <About />
        <Contact />
        {/* <Travel />
        <Tips /> */}
    </main>

      {/* <Footer />  */}

    </>
  )
}

export default App

import './App.css'
import { Home } from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import NavBar from './Pages/NavBar'
import Services from './Pages/Services'
import Footer from './Pages/models/Footer'

function App() {
  return (
    <>
      <div className='container' id="Home">
        <NavBar/>
        <Home/>
        <AboutUs/>
        <Services/>
        <Footer/>
      </div>

    </>
  )
}

export default App

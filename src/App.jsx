import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"
import Resources from "./components/Resources"
import Stats from "./components/Stats"
import Platform from "./components/Platform"
import Contact from "./components/Contact"

function App() {

  return (
    <>
      <div>
       <Navbar/>
       <Homepage/>
       <Platform/>
       <Stats/>
       <Contact/>
       <Resources/>
       <Footer/>
      </div>
    </>
  )
}

export default App

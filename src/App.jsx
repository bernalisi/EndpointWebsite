import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import LifeSciences from "./pages/LifeSciences"
import HealthcareProviders from "./pages/HealthcareProviders"
import Resources from "./pages/Resources"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <>
    {/* Layout - Navbar*/}
    <div>
      <Navbar/>

        {/* React Routes */}
        <Router>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/LIFE SCIENCES" element={<LifeSciences/>}/>
            <Route path="/PROVIDERS" element={<HealthcareProviders/>}/>
            <Route path="/RESOURCES" element={<Resources/>}/>
          </Routes>
        </Router>

      {/* Layout - Footer */}
      <Footer/>
    </div>
    </>
  )
}

export default App

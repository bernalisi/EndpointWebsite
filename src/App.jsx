import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import LifeSciences from "./pages/LifeSciences"
import HealthcareProviders from "./pages/HealthcareProviders"
import ContactUs from "./pages/ContactUs"
// import Resources from "./pages/Resources"
import Navbar from "./components/layout/Navbar/Navbar"
import Footer from "./components/layout/Footer"
import { ArticlesProvider } from "./components/resources/ArticlesContext";


function App() {
  return (
    <>
    {/* Layout - Navbar*/}
    <div className="relative">
      <Navbar/>

        {/* Medium API articles */}
        <ArticlesProvider>

          {/* React Routes */}
          <Router>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              {/* <Route path="/RESOURCES" element={<Resources/>}/> */}
              <Route path="/LIFE SCIENCES" element={<LifeSciences/>}/>
              <Route path="/PROVIDERS" element={<HealthcareProviders/>}/>
              <Route path="/CONTACT US" element={<ContactUs/>}/>
            </Routes>
          </Router>

        </ArticlesProvider>

      {/* Layout - Footer */}
      <Footer/>
    </div>
    </>
  )
}

export default App

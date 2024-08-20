import Hero from "../components/homepage/Hero"
import Resources from "../components/homepage/Resources"
import Stats from "../components/homepage/Stats"
import Platform from "../components/homepage/Platform"
import Contact from "../components/layout/Contact"

export default function Homepage() {
  return (
    <div className="w-screen">
      <Hero/>
      <Platform/>
      <Stats/>
      <Contact/>
      <Resources/>
    </div>
  )
}

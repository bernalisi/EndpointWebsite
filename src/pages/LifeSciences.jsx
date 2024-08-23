import Contact from "../components/layout/Contact"
import HeroUser from "../components/life-sciences/HeroUser"
import SolutionUser from "../components/life-sciences/SolutionUser"
import Why from "../components/life-sciences/Why"

export default function LifeSciences() {
  return (
    <div className="bg-white">
      <HeroUser/>
      <SolutionUser/>
      <Why/>
      <Contact/>
    </div>
  )
}

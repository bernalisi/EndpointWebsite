import Contact from "../components/layout/Contact"
import HeroUser from "../components/life-sciences/HeroUser"
import SolutionUser from "../components/life-sciences/SolutionUser"
import UseCases from "../components/life-sciences/UseCases"

export default function LifeSciences() {
  return (
    <div className="bg-white">
      <HeroUser/>
      <SolutionUser/>
      <UseCases/>
      <Contact/>
    </div>
  )
}

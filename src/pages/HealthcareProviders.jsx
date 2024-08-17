import Contact from "../components/layout/Contact"
import HeroProvider from "../components/healthcare-providers/HeroProvider"
import SolutionProvider from "../components/healthcare-providers/SolutionProvider"
import WhyProvider from "../components/healthcare-providers/WhyProvider"

export default function HealthcareProviders() {
  return (
    <div>
      <HeroProvider/>
      <SolutionProvider/>
      <WhyProvider/>
      <Contact/>
    </div>
  )
}

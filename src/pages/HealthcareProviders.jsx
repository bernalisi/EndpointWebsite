import Contact from "../components/layout/Contact"
import HeroProvider from "../components/healthcare-providers/HeroProvider"
import SolutionProvider from "../components/healthcare-providers/SolutionProvider"
import KeyBenefits from "../components/healthcare-providers/KeyBenefits"
import Faq from "../components/healthcare-providers/Faq"

export default function HealthcareProviders() {
  return (
    <div>
      <HeroProvider/>
      <SolutionProvider/>
      <KeyBenefits/>
      <Faq/>
      <Contact/>
    </div>
  )
}

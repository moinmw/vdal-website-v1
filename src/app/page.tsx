import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import ArchitectureView from '@/components/Architecture'
import AboutVdal from '../components/About'
import Solutions from '@/components/Solutions'
import SuccessStories from '@/components/SuccessStories'
import WhoBenefits from '@/components/WhoBenefits'
import ClosingStatement from '@/components/ClosingStatement '
import CoreCapabilities from '@/components/CoreCapabilities '
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import EnterpriseCases from '@/components/EnterpriseCases'
import EnterprisePain from '@/components/EnterprisePain'
import BusinessValue from '@/components/BusinessValue'



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ArchitectureView />
      <AboutVdal />
      <EnterprisePain />
      <Solutions/>
      <WhoBenefits />
      <EnterpriseCases />
      <CoreCapabilities />
      <BusinessValue />
      <SuccessStories />
      <ClosingStatement />
      <ContactSection />
      <Footer />
    </div>
  )
}

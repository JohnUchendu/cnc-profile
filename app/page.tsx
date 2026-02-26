import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Sidebar from '@/components/Sidebar'
import MembershipCard from '@/components/MembershipCard'
import MemberInfo from '@/components/MemberInfo'
import Services from '@/components/Services'
import MapCard from '@/components/MapCard'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <main className="main">
        <div className="profileGrid">
          <Sidebar />

          <div className="mainPanel">
            <MembershipCard />
            <MemberInfo />
            <Services />
            <MapCard />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

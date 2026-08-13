import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Hero from './components/ux/Hero'
import NewThisWeek from './components/ux/NewThisWeek'
import FeaturedBands from './components/ux/FeaturedBand'
import LatestArticles from './components/ux/LatestArticles'
import EmailSignup from './components/ux/EmailSignup'




export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <NewThisWeek />
        <FeaturedBands />
        <LatestArticles />
        <EmailSignup />
      </main>
      <Footer />
    </>
  );
}

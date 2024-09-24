import Head from 'next/head'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import WhyChooseUs from '../components/WhyChooseUs'
import EnterprisePartnerships from '../components/EnterprisePartnerships'
import PopularCourses from '../components/PopularCourses'
import Resources from '../components/Resources'
import Pricing from '../components/Pricing'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>BrightMind AI - Empowering Education in Deep Tech</title>
        <meta name="description" content="BrightMind AI offers cutting-edge AI education with hands-on projects and live mentorship to help you advance your career." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Hero />
      <Programs />
      <WhyChooseUs />
      <EnterprisePartnerships />
      <PopularCourses />
      <Resources />
      <Pricing />
    </div>
  )
}

export default Home

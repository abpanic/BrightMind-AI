import Head from 'next/head'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import WhyChooseUs from '../components/WhyChooseUs'
import PopularCourses from '../components/PopularCourses'
import Resources from '../components/Resources'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>BrightMind AI - Empowering Education in Deep Tech</title>
        <meta name="description" content="BrightMind AI offers cutting-edge AI education with hands-on projects and live mentorship to help you advance your career." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <Hero />
      <Programs />
      <WhyChooseUs />      
      <PopularCourses />
      <Resources />      
    </div>
  )
}

export default Home

import Head from 'next/head'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import BrightMindEdge from './brightmindedge'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Bright-Mind AI - Empowering Education in Deep Tech</title>
        <meta name="description" content="Bright-Mind AI offers cutting-edge AI education with hands-on projects and live mentorship to help you advance your career." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <Hero />
      <Programs />
      <Bright-MindEdge />    
      
    </div>
  )
}

export default Home

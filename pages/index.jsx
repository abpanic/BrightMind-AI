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
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />       
      </Head>
      <Hero />
      <Programs />
      <BrightMindEdge />    
      
    </div>
  )
}

export default Home

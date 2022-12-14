import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import PopularClass from '../components/PopularClass'
import Services from '../components/Services'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Ed -Circle Education Website</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Hero/>
      <Services/>
      <PopularClass/>

    </div>
  )
}

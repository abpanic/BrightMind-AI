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

        {/* Favicon and Icons */}
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="Bright-Mind AI - Empowering Education in Deep Tech" />
        <meta property="og:description" content="Bright-Mind AI offers cutting-edge AI education with hands-on projects and live mentorship." />
        <meta property="og:image" content="/assets/images/og-image.png" />
        <meta property="og:url" content="https://www.bright-mind.in" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags for Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bright-Mind AI - Empowering Education in Deep Tech" />
        <meta name="twitter:description" content="Advance your career with hands-on AI projects and expert mentorship." />
        <meta name="twitter:image" content="/assets/images/twitter-card.png" />

        {/* Structured Data: Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bright-Mind AI",
            "url": "https://www.bright-mind.in",
            "logo": "https://www.bright-mind.in/assets/logo.svg",
            "sameAs": [
              "https://www.facebook.com/BrightMindAI",
              "https://www.twitter.com/BrightMindAI",
              "https://www.linkedin.com/company/brightmindai"
            ]
          })}
        </script>      
      </Head>
      <Hero />
      <Programs />
      <BrightMindEdge />    
      
    </div>
  )
}

export default Home

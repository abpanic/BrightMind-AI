import '../styles/globals.css'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </div>
  )
}

export default MyApp
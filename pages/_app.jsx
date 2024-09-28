import '../styles/globals.css'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
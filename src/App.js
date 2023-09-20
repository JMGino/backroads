import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Services from './components/Services';
import Tours from './components/Tours';

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  )
}
export default App

import './App.css'
import Navbar from './assets/components/navbar';
import Hero from './assets/components/hero';
import About from './assets/components/about';
import Menu from './assets/components/menu';
import Letter from './assets/components/letter';
import Order from './assets/components/order';
import Footer from './assets/components/footer';

function App() {
  return (
    <>
      <div className='site'>
        <Navbar />
        <Hero/>
        <About/>
        <Menu/>
        <Letter/>
        <Order/>
        <div><Footer/></div>
        
      </div>
    </>
  )
}

export default App

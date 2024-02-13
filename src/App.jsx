
import './App.css'
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Menu from './components/menu';
import Letter from './components/letter';
import Order from './components/order';
import Footer from './components/footer';

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

import './App.css'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

export default function App() {

  return (
    <div>
      <Navbar />
      <h1>Nuestro proyecto con React + Vite</h1>
      <Card />
      <Footer />
    </div>
  )
}
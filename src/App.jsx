import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import PatientHome from './components/PatientHome';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='appContainer'>
      <div className="mainContent">
        <Header />
        <PatientHome />
      </div>
      <Footer />
    </div>

  )
}

export default App

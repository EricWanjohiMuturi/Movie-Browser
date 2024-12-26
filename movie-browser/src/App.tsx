import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import AboutView from './components/About'
import { Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/about/" element={<AboutView />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App

import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        
        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

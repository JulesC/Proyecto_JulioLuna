import { useState } from 'react'
import Navbar from './componentes/Navbar/jsx/Navbar'
import './plugings/sweetalert2.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar />
    </div>
  )
}

export default App

import Navbar from './componentes/Navbar/jsx/Navbar'
import Cart from './componentes/Cart/jsx/Cart'
import './plugings/sweetalert2.css'
import './App.css'


function App() {
  return (
    <div className="App">
      < Navbar />
      < Cart min={1} max={10} />
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);


  return (
    <div className="App">
    <div className="veber">
      <div className="title-money">💸</div>
      <h1 className="vebertitle">VEBER</h1>
      <div className="title-money-bis">💸</div>
    </div>
    <h3 className="catchphrase">Rust server that allows you to create your own economy</h3>
    </div>
  )
}

export default App

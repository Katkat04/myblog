import { useState } from 'react'
import './index.css';
import Header from "./component/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header/>
  )
}

export default App

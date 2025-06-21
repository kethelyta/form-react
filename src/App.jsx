import { useState } from 'react'
import MyForm from './components/MyForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App"> 
        <h1>Formulário</h1>
        <MyForm userName="kethely" userEmail="kethely@gmail.com"/>
        </div>
    </>
  )
}

export default App

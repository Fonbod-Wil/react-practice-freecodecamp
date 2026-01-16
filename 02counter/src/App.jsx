
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

//let counter = 15
 //nst [count, setCount] = useState(0)
 const addValue = () => {

   //setCounter(counter + 1)
   // in the case of batching react may not update the state immediately
   setCounter (prevCounter => prevCounter + 1)

    console.log("value of counter", counter)
 }

  const subtracValue = () => {

    //setCounter (counter - 1)
    setCounter (prevCounter => prevCounter - 1)

    console.log("value of counter", counter)
  }

  return (
    <>
     <h1>React course with Wilson {counter}</h1>
     
     <h2>Counter Value: 0</h2>

     <button onClick={addValue}>Add value </button> 

     <button onClick={subtracValue}>Subtract value </button>

     <p>fotter:{counter} </p>
    </>
  )
}

export default App

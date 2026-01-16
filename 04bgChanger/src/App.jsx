
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  function changeColor(color) {
    setColor(color)
  }

  return (
    <div className='w-full h-screen duration-200' style=
    {{backgroundColor: color}} >
        <div className='fixed flex flex-wrap justify-center 
        bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center 
          gap-3 shadow-lg p-4 bg-white px-3 rounded-3xl'>
              <button
              //onClick={() => setColor("red")}
              onClick={() => changeColor("red")}
              className='outline-none px-4 py-1 rounded-full
               shadow-lg text-black' style={{backgroundColor: 'green'}}
              >test</button>
              <button
               onClick={()=> setColor("blue")}
              className='outline-none px-4 py-1 rounded-full
               shadow-lg text-black' style={{backgroundColor: 'yellow'}}
              >test 2</button>
              <button
              onClick={() => setColor("green")}
              className='outline-none px-4 py-1 rounded-full
               shadow-lg text-black' style={{backgroundColor: 'pink'}}
              >test 3</button>
             
          </div>
        </div>
    </div>
  )
}

export default App

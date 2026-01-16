import Cart from './components/cart'
import './App.css'

function App() {

  let newArray = [1,2,3,4,5]


  return (
     <div>
       <h1 className='text-3xl bg-green-500 p-3 rounded-2xl'> Looking at tailwindcss</h1>

       <Cart username="Mercy" myArr={newArray} />

     </div>
      
  )
}

export default App


import { CurrencyPhoto } from './constants/currencyphoto'
import './App.css'
import { useState,  } from 'react'
import UseCurrenyInfo from './hooks/useCurrencyInfor'
import {InputBox} from './components/index.js'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('eur')
  const [convertedAmount, setConvertedAmount] = useState(0)


  const currencyInfo =  UseCurrenyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {

    setConvertedAmount(amount * currencyInfo[to])

  }


  return (
    <div className='w-full h-screen flex flex-wrap
    justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(${CurrencyPhoto})`}}
    >
      <div className='w-full'>

        <div className='w-full max-w-md mx-auto
        border border-gray-60 round-lg p-5 backdrop-blue-sm
        bg-white/30'>

           <form onSubmit={(e) => {
              e.preventDefault()
              convert()
           }}>
           <div className='w-full mb-1'>
            <InputBox 
              label='from'
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
           </div>
             <div className='relative w-full h-0.5'>
              <button
               className='absolute left-1/2 -translate-x-1/2
               -translate-y-1/2 border-2 border-white
               rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
              Swap

              </button>
             </div>
               <div className='w-full mb-1'>
            <InputBox 
              label='to'
              amount={convertedAmount}
              amountDisable
              currencyOption={options}
              onCurrencyChange={(currency) => setTo(currency)}
            
              selectedCurrency={to}
            />
           </div>
               <button 
                 type='submit'
                 className='w-full bg-blue-600 px-4
                 py-3 rounded-lg'
               > 
               Convert {from.toUpperCase} to {to.toUpperCase}

               </button>

           </form>
        </div>

      </div>



    </div>
  )
}

export default App

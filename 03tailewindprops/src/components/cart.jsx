import React from 'react'
import { IMG_URL } from '../constants/photolink'
function Cart({ username="Wi" , post="Not assign yet"}) {

  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  
    <img className="w-16 h-16 md:w-32 md:h-auto
    md:rounded-none rounded-full mx-auto "  
    alt="Album cover" 
    src={IMG_URL}
    loading="lazy"
    width="200" 
    height="200"
    />
  <div className="text-center md:text-left">
    <h2 className="text-xl font-semibold">{username}'s Cart</h2>
  </div>
    {post} 
    
</div>
  )
}

export default Cart

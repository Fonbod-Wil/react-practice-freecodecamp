import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Protected({children, authentication = true}) {

 const authStatus = useSelector((state) => state.auth.status)

 const navigate = useNavigate()
 const [loader, setLoader] = useState(true)

 useEffect(() => {
    if(authentication && authStatus !== authentication) {
       navigate("/login")

    } else if (!authentication && authStatus !== authentication){
      navigate("/")

    }

    // Set loader to false asynchronously to avoid cascading renders
    const timer = setTimeout(() => {
      setLoader(false)
    }, 0)

    return () => clearTimeout(timer)

 }, [authStatus, navigate, authentication])


  return loader ? null : <>{children}</>

    

  
}

export default Protected
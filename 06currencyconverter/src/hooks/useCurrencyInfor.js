import { useEffect, useState } from "react";

function UseCurrenyInfo(currency){
// storing data from the api
const [data, setData] = useState({});

useEffect(() => {

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
  
}, [currency])

 console.log(data)
 return data;

}



export default UseCurrenyInfo;
//import { useLoaderData } from "react-router-dom";


export const githubInfoLoader = async() => {

    //const data = useLoaderData();

 const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json()
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'

const REACT_ELEMENT = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "Click me to go to google"
}

function MyApp() {
    return(

        <div>
        <h1>
            Custom React App
        </h1>

        </div>
    )

}
export default MyApp;

const AeactElement = React.createElement(
'a',
{href: "https://google.com", target: "_blank"},

"Click me to go to google"

)


createRoot(document.getElementById('root')).render(
  
    <App />
  
)
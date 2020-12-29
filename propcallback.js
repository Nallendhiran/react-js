import React from "react"
import call from "./mapcall"

function joke(props){
    return(
    <div>
     <h1 style={{color:"blue",display:block}}>question:{props.call.question}</h1>
     <h3>answer:{props.call.answer}</h3>
     </div>
    )
}

export default joke
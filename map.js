import React from "react"
import call from "./mapcall"
import joke from "./propcallback"



function app(){
    const calling=call.map(item=>
    <joke key={item.id} result={item} />)
    return(<div>
        {calling}
    </div>
    
    )
}

export default joke
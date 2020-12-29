import React,{useState} from "react"


function state(){
    const[count,setcount]=useState(initial=0)
    return(
        <div>
        <button onClick={()=>setcount(count+1)}>counter</button>
        </div>
    )

}
//prevstate

function prevstate(){
    const[count,setcount]=useState(initial=0)
    return(
        <div>
        <button onClick={()=>setcount(prevcount=>prevcount+1)}>counter</button>
        </div>
    )

}
//onclick=> define anything inside {}

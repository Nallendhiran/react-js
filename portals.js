import react from "react"
import reactdom from "react-dom"
//portal=>to use render in another root element id(in classname)
function portals(){
   return(reactdom.createPortal(<h1>
       something</h1>,document.getElementById("portal")
    )
   )
}
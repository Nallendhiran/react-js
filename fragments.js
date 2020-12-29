import react from "react"
import reactdom from "react-dom"

function fragments(){
   return(<React.Fragment>
       something
    </React.Fragment>
    )
}
//or
function fragments(){
    return(<>
        something
     </>
     )
 }
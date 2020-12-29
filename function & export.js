import react from "react"
import reactdom from "react-dom"

function rend(){
   return(<div><h1>nallendhiran</h1>
   <p>hi hi hi hi hi hi</p>
   <ul>
    <li>hi</li>
    <li>hello</li>
    <li>how are you</li></ul>
    </div>
    )
}



reactdom.render(<rend />,document.getElementById())
export default rend
//to import  import rend from "./file name"
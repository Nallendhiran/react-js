import react from "react"
import reactdom from "react-dom"
import {Link} from "react-router-dom"


function postrouter(){
    return(
        <div>
            <ul>
            <Link to="/about">
                <li>about</li>
            </Link>
            <Link to="/shop">
                <li>shop</li>
            </Link>
            </ul>
        </div>
    )
 }
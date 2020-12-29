import react from "react"
import reactdom from "react-dom"
import {BrowserRouter as router,Route,Switch} from "react-router-dom"
import nav from "./nav"
import about from "./about"
import shop from "./shop"

function routerget(){
   return(
       <div>
           <router>
               <Switch>
               <Route path="/" exact component="home" />
               <Route path="/about" component="about" />
               <Route path="/shop" exact component="shop" />
               </Switch>
           </router>
       </div>
   )
}
const home=()=>{
    <div>
        <h1>home page</h1>
    </div>
}

//switch=>used to switching component
//exact=>used to change exact path
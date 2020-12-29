import React from "react"
import ReactDom from "react-dom"


class classconstructor extends React.Component{
    //to use constructor
    //we assign super()
    constructor(){
        super();
     //to call function inside class
    this.construct=this.construct.bind(this)   
    }
    
    //to use function
    construct(){
        return(something)
    }

    render(){
        return
        (<div>
            <construct />
        </div>)
    }
}
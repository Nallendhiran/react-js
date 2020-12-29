import React from "react"
import ReactDom from "react-dom"


class classconstructor extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    this.construct=this.construct.bind(this)   
    }
    construct(){
        return(
            this.setState(count=>{
                    count=this.state.count+10
            })
            )
    }

    render(){
        return
        (<div>
            {this.state.count}
        </div>)
    }
}
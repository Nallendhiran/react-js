import React from "react"
import ReactDom from "react-dom"
//ref=>focusing after loaded
class rummy extends React.Component{
    constructor(props){
          super(props)
          this.inputRef=React.createRef()
          this.cb=null
          this.ref=(some=>{
              this.cb=some
          }
          )
    }
   componentDidMount(){
      // this.inputRef.current.focus()
      if(this.ref){
          this.cb.focus()
      }
   }





    render(){
        return(<div>
            <input type="text" ref={this.inputRef}></input>
            <input type="text" ref={this.ref}></input>
        </div>)
    }

}
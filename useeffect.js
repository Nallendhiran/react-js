import React,{useState,useEffect} from "react"
//effect=> used to give after each render

function effect(){
    const[count,setcount]=useState(initial=0)
    useEffect(()=>{
        const num= 'your number is ${count} ' 
    },[count])
    //
    return(
        <div>
        <button onClick={count}>counter</button>
        <h1>{num}</h1>
        </div>
    )

}

//useEffect(()=>{
  //  const num= 'your number is ${count} ' 
//[count]=> its a dependency to store it and to render only once at each interval

//define the given value by using ${}
useEffect(()=>{
    const interval=setInterval(() => {      //componentwillmount
        setcount(count+1)
    }, 1000);
    return(()=>{clearInterval(interval)})     //componentwillunmount
    
},[])
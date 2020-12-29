import React,{useState,useEffect} from "react"
import {Link} from "react-routerr-dom"

function some(){
    //useeffect=>to fetch all data
    //usestate=>to save all data
    useEffect(()=>{
        fetchitems();
    },[])
    const [items,setitems]=useState([]);
const fetchitems=async()=>{
         const data=fetch("link")
         console.log(str)
         const str=await data.json()
         setitems(items)
}
}
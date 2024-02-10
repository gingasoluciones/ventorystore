import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Url, Uri } from "../components/Const"
import { ProductoCard } from "./ProductoCard"
export function Productos(props){
    const params = useParams()
    
    let url = ""
    useEffect(()=>{ 
        productosCargar("producto","")
    },[])
    return( 
        <></>
    )
}
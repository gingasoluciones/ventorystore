import { useEffect, useState } from "react"
import { Carrousel } from "../components/Carrousel"
import { Categorias } from "../components/Categorias"
import { ProductoCard } from "../components/ProductoCard"
import { Url } from "../components/Const"
export function Principal(){
    const [items, setItems] = useState([])

    function cargar(){ console.log("cargar...")
        const url = "http://localhost/ventory/v4/Api/"
        const requestOptions = {
            method: "GET",
            header :{
                "Content-Type" : "application/json"
            }
        }
        fetch(Url +"Metodos/Get.php?tabla=producto", requestOptions)
        .then(response => response.json())
        .then(data => { console.log(data)
            setItems(data)
        })
        .catch(error=> console.log(error))

    }
    useEffect(()=>{ 
        cargar()
    },[])
    return(<>
    <main>
        <Carrousel></Carrousel>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Categorias></Categorias>           
                </div>
                <div className="col-10">
                    <div className="row">
                        {
                        items.map(dato=>(
                        <ProductoCard key={dato.id} datos={dato}/>
                        ))
                        } 
                    </div>           
                </div>
            </div>
        </div>
        
    </main>
    </>)
}
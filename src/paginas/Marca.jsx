import { useRef,useEffect, useState } from "react"
import { useParams } from "react-router"
import { Categorias } from "../components/Categorias"
import { Marcas } from "../components/Marcas"
import { ProductoRow } from "../components/ProductoRow"
import { Url } from "../components/Const"
export function Marca(props){ console.log("props MArca", props)
    const params = useParams(); console.log("params", params)
    const busca = props.busca
    const [search, setSearch] = useState('')
    const [items, setItems] = useState([])
    let imagen = ""
    function cargar(){ console.log("Marca cargar..." + busca)
        setSearch(busca)
        let url = "http://localhost/ventory/v4/Api/"
        const requestOptions = {
            method: "GET",
            header :{
                "Content-Type" : "application/json"
            }
        }
        url= Url + "Metodos/Get.php?action=marca&busqueda=" + busca
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => { console.log("respuesta..." + url)
            console.log(data)
            setItems(data.items)
        })
        .catch(error=> console.log(error))
    }
    // useEffect(()=>{ 
    //     cargar()
    // },[search])

    return(<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Categorias></Categorias>
                    <Marcas></Marcas>           
                </div>
                <div className="col-10">
                    <div className="container">
                        <div className="row py-3" >
                        <h2>Marca: { search }</h2>
                        </div>
                        <div className="row">     
                        <section >
                    {/* style="background-color: #eee;" */}
                        <div className="container py-5">
                            <div className="row justify-content-center mb-3">
                            {
                                items.map(dato=>(
                                    <ProductoRow key={dato.id} datos={dato}></ProductoRow>                                    
                                ))
                            } 
                            </div>
                            </div>
                        </section>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>)
} 
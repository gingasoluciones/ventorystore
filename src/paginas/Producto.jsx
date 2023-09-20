import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Categorias } from "../components/Categorias"
import { Marcas} from "../components/Marcas"
import ModalImage from "react-modal-image"
import { Url, Uri } from "../components/Const"
export function Producto(){
    const params = useParams()
    const [search, setSearch] = useState('')
    const [item, setItem] = useState([])
    let imagen = ""
    function cargar(){ //console.log("Busqueda cargar..." + params.busca)
        setSearch(params.busca)
        let url = "http://localhost/ventory/v4/Api/"
        const requestOptions = {
            method: "GET",
            header :{
                "Content-Type" : "application/json"
            }
        }
        url= Url + "Metodos/Get.php?action=producto&busqueda=" + search
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => { console.log("respuesta..." + url)
            console.log(data)
            console.log("datos de item")
            setItem(data.item)
        })
        .catch(error=> console.log(error))
    }
    useEffect(()=>{ 
        cargar()
    },[search])

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
                        <div className="container">
                            <div className="col-2">&nbsp;</div>
                            <div className="col-8">
                                <div className="container" >
                                    <div className="row">
                                        <div className="col-6">

                                        { item.images ? (item.images.map((c,i)=>
                                            // <img src={`http://localhost/ventory/images/3/${c.nombre}`} className="w-100" />
                                            <ModalImage key={c.id} small={`${Uri}${c.nombre}`}
                                                        large= {`${Uri}${c.nombre}`}
                                                        alt = { item.des }
                                                        hideDownload = { true }
                                                        className="w-100" 
                                                ></ModalImage>
                                        )): (<></>)}
                                        </div>
                                        <div className="col-6">
                                            <h3>{ item.des }</h3>
                                            <h1>$ { item.valor }</h1>
                                            <h5>{ item.marca}</h5>
                                            <h5>{ item.categoria }</h5>
                                            <h5>{ item.descripcion }</h5>
                                        </div>
                                    </div>
                                    <div className="row py-4">
                                        { item.images ? (item.images.map((c,i)=>
                                            <div key={c.id} className="col-4">
                                                {/* <img src={`http://localhost/ventory/images/3/${c.nombre}`} className="w-50" /> */}
                                                <ModalImage key={c.id} small={`${Uri}${c.nombre}`}
                                                            large= {`${Uri}${c.nombre}`}
                                                            alt = { item.des }
                                                            hideDownload = { true }
                                                 ></ModalImage>
                                            </div>
                                        )):(<></>)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">&nbsp;</div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
} 
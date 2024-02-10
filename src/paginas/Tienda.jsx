import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { BrowserRouter  as Router, Routes,Route,Link, useNavigate  } from 'react-router-dom'
import ModalImage from "react-modal-image"
import { ProductoCard } from "../components/ProductoCard"
import { Productos } from "../components/Productos" 
import { Url, Uri, tienda } from "../components/Const"
import { BarraStore } from "../components/BarraStore"
export function Tienda(){
    const params = useParams(); console.log("tienda", params)
    // localStorage.setItem("tienda", ); 
    let url = ""
    const tienda = "electroled"
    localStorage.setItem("tienda", tienda)
    const [respuesta, setRespuesta] = useState()
    const [items, setItems] = useState([])
    const [categorias, setCategorias] = useState([])
    const [marcas, setMarcas] = useState([])
    const [contacto, setContacto] = useState(0)
    
    function categoriasCargar(){ console.log("cargar categorias...")
        console.log("ls " )
        const requestOptions = {
            method: "GET",
            header :{
                "Content-Type" : "application/json"
            },
        }
        const url = Url +"Metodos/Get.php?action=categorias&tienda="+tienda; console.log("url",url)
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => { console.log("data Categorias",data)
            setCategorias(data)
        })
        .catch(error=> console.log(error))

    }
    useEffect(()=>{ 
        productosCargar()
        cargar()
        categoriasCargar()
        marcasCargar()
        datosCargar()
    },[])
    function cargar(){
    }
    function marcasCargar(){ console.log("cargar...")
        const requestOptions = {
            method: "GET",
            header :{
                "Content-Type" : "application/json"
            }
        }
        let url = Url +"Metodos/Get.php?action=marcas&tienda="+tienda; console.log("url",url)
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => { console.log(data)
            setMarcas(data)
        })
        .catch(error=> console.log(error))
    }

    function datosCargar(){ console.log("cargar datos...")
        const requestOptions = {
            method: "GET",
            header :{
                "Content-Type" : "application/json"
            }
        }
        let url = Url +"Metodos/Get.php?action=datos&tienda="+tienda; console.log("url",url)
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => { console.log(data)
            localStorage.setItem("contacto", data.contacto)
            setContacto(data.contacto)
        })
        .catch(error=> console.log(error))
    }
    function productosCargar(){ console.log("Productos cargar...")
            const requestOptions = {
                method: "GET",
                header :{
                    "Content-Type" : "application/json"
                }
            }
            url= Url + "Metodos/Get.php?action=productos&tienda="+tienda+"&busqueda=";
            console.log("url",url)
            fetch(url, requestOptions) 
            .then(response => response.json())
            .then(data => { console.log("respuesta..." + url)
                console.log("productos",data)
                if(data.filas > 0){
                    setItems(data.items)
                    //setRespuesta(value)
                }else{
                    setRespuesta(data.msj)
                    setItems([])
                }
                    
            })
            .catch(error=> console.log(error))
        }
    const hCarga=(event, page,param)=>{
        console.log("clicked")
        productosCargar(page,param)
    }

    return(<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                <aside className="bd-aside text-muted mb-3 mb-xl-5 px-2">
                    <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">Categorias</h2>
                    <nav className="small" id="toc">
                        <ul className="list-unstyled">
                        { categorias.map(dato=>(
                            <li key={dato.des} className="my-2">
                                <a key={dato.des} onClick={ event => hCarga(event, "categoria" ,dato.des )} >{ dato.des }</a>
                            </li>
                        )) }
                        </ul>
                    </nav>
                </aside>
                <aside className="bd-aside text-muted align-self-start mb-3 mb-xl-5 px-2">
                    <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">Marcas</h2>
                    <nav className="small" id="toc">
                        <ul className="list-unstyled">
                        { marcas.map(dato=>(
                            <li key={dato.des} className="my-2">
                                <a key={dato.id} onClick={ event => hCarga(event, "marca" ,dato.des )} className="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#forms-collapse" aria-controls="forms-collapse">{dato.des}</a>
                            </li>
                        )) }
                        </ul>
                    </nav>
                </aside>
                </div>
                <div className="col-10">
                    <div className="container">
                        <div className="row py-3" >
                            <div className="container">
                                <h3>{ respuesta}</h3>
                                <div className="col-12">
                                    <div className="container" >
                                        <div className="row">
                                            <section >
                                            {/* style="background-color: #eee;" */}
                                                <div className="container py-5">
                                                    <div className="row justify-content-center mb-3"> 
                                                    {
                                                        items.map(dato=>(
                                                            <ProductoCard key={dato.id} datos={dato}></ProductoCard>
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
                    </div>
                </div>
            </div>
        </div>
        <a href={`https://api.whatsapp.com/send?phone=${contacto}&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20.`} class="float" target="_blank">
            <i className="fa fa-whatsapp my-float"></i>
        </a>
    </>)
} 
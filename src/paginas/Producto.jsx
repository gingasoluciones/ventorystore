import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { Categorias } from "../components/Categorias"
import { Marcas} from "../components/Marcas"
import ModalImage from "react-modal-image"
import { Url, Uri, tienda } from "../components/Const"
export function Producto(){ 
    const params = useParams(); //console.log("producto params",params)
    const [search, setSearch] = useState('')
    const [item, setItem] = useState([])
    const ref_cantidad = useRef()
    // const [tiendaUs, setTiendaUs] = useState()
    let imagen = ""
    const [contacto, setContacto] = useState(0)
    function productoCargar(){ console.log("producto cargar...")
        setSearch(params.busca)
        const requestOptions = {
            method: "GET",
            header :{
                "Content-Type" : "application/json"
            }
        }
        
        // setTiendaUs(tienda)
        const url= Url + "Metodos/Get.php?action=producto&tienda="+tienda+"&busqueda=" + search; console.log("url", url)
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => { //console.log("respuesta..." + url)
            console.log(data)
            //console.log("datos de item")
            setItem(data.items[0])
        })
        .catch(error=> console.log(error))
    }
    useEffect(()=>{ 
        productoCargar()
        setContacto(localStorage.getItem("contacto"))
    },[search])

    const hPedir=(event,nombre,id, valor)=>{ console.log("pedir")
        let errores = 0
        const cantidad = ref_cantidad.current.value

        if(!cantidad){ alert("Debes digitar una cantidad"); errores++;        }
        if( cantidad < 1){ alert("Digita una cantidad valida (mayor a 0)"); errores++; }
        if(cantidad > data.items[0].cantidad){ alert("Cantidad no disponible"); errores++; }
            
        if(errores == 0){
            let carrito = []
            carrito  = JSON.parse(localStorage.getItem("carrito"))||[]
            console.log("carrito", carrito)
            const pedidoitem = {id: id,
                                cantidad : cantidad,
                                nombre : nombre,
                                valor : valor, }
            console.log("a subir..", pedidoitem)
            if(carrito == null){
                //carrito.push(pedidoitem)
                localStorage.setItem("carrito", JSON.stringify(pedidoitem))
            }else{
                carrito.push(JSON.stringify(pedidoitem))
                localStorage.setItem("carrito", JSON.stringify(carrito))
            }
            console.log("pidiendo", nombre ,cantidad)
            alert(""+ nombre +" agregado al pedido")
        }
        
    }
    return(<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    {/* <Categorias  tienda={tienda}></Categorias>   
                    <Marcas  tienda={tienda}></Marcas>         */}
                </div>
                <div className="col-10">
                    <div className="container">
                        <div className="row py-5" >
                        <div className="container d-flex justify-content-center">
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
                                    <div className="row py-2">
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
                                    <div className="row pt-4">
                                        <div className="col-6">
                                            <h5>Disponible : {item.cantidad}</h5>
                                        </div>
                                        <div className="col-6">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="ppx.4">
                                                        <input className="form-control" ref={ ref_cantidad } type="number" size={5} style={{height:50}}></input>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <button onClick={ event => hPedir(event, item.des,item.id, item.valor )} className="btn btn-success">Agregar a Pedido</button>
                                                </div>
                                            </div>
                                            
                                        </div>
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
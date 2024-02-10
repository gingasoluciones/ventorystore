import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { Categorias } from "../components/Categorias"
import { Marcas} from "../components/Marcas"
import { Url, Uri } from "../components/Const"
export function Carrito(){
    const params = useParams()
    const tienda = localStorage.getItem("tienda"); 
    // console.log("Visitando tienda", tienda)
    // console.log("params", params)
    const [tiendaUs, setTiendaUs] = useState([])
    const [search, setSearch] = useState('')
    const [items, setItems] = useState([])
    const [respuesta, setRespuesta] = useState("")
    const [total, setTotal] = useState(0)
    function cargar(){ console.log("cargar del ls...")
        let carrito = [] 
        carrito = JSON.parse(localStorage.getItem("carrito"))
        if(carrito == null){ console.log("null")
            setItems([])
        }else{
            let lista = []
            carrito.forEach(element => {
                lista.push(JSON.parse(element))
            });
            let totalT  = 0
            lista.map(element=>{
                console.log("el ",element.id)
                totalT = totalT + (element.valor * element.cantidad * 1)
            })

            setTotal(totalT)
            setItems(lista)
            console.log("lista", lista)   
        }
    }
    useEffect(()=>{ 
        cargar()
    },[search])

    const hEnviar=()=>{
        const url= Url + "Metodos/Post.php";
        let carrito = [] 
        carrito = JSON.parse(localStorage.getItem("carrito"))
        const data = {
            action : "pedido",
            tienda :tienda,
            items : carrito,
            nombre: "cliente web",
            contacto : "323000000"
        }
        const requestOptions = {
            method: "POST",
            header :{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        } 
        console.log("body", requestOptions)
        console.log("url",url)
        fetch(url, requestOptions) 
        .then(response => response.json())
        .then(data => { console.log("respuesta...")
            console.log("data",data) 
            if(data.response == "ok")
                alert(data.msj);
            else
                alert("error");         
        })
        .catch(error=> console.log(error))
    }
    return(<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <h4><Link to={`/${tienda}/`} >Volver</Link></h4>    
                </div>
                <div className="col-10">
                    <div className="container">
                        <div className="row py-3" >
                            <div className="container">
                                <h3>Pedido</h3>
                                <div className="col-12">
                                    <div className="container" >
                                        <div className="row">
                                            <section >
                                            
                                                <div className="container py-5">
                                                    <div className="row justify-content-center mb-3">
                                                        <table className="table">
                                                            <tr>
                                                                <th>Producto</th>
                                                                <th>Cantidad</th>
                                                                <th>Precio</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        
                                                                {
                                                                    items.map(dato=>(
                                                                        <tr key={dato.id}>
                                                                            <td> {dato.nombre}</td>
                                                                            <td> {dato.cantidad} </td>
                                                                            <td> $ {dato.valor} </td>
                                                                            <td> $ { dato.valor * dato.cantidad }</td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                                <td>Total</td>
                                                                <td>$ {total}</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="row">
                                                        <button onClick={ hEnviar } className="btn btn-large btn-warning">Enviar Pedido</button> 
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
    </>)
} 
import { useRef,useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { Categorias } from "../components/Categorias"
import { Marcas } from "../components/Marcas"
import { ProductoRow } from "../components/ProductoRow"
import { Url } from "../components/Const"
export function Categoria(props){ console.log("Categoria")
    // const {busca} = useParams()
    const busca = props.busca
    console.log("..."+busca)
    const [search, setSearch] = useState('')
    const [items, setItems] = useState([])

    const [cats, setCats] = useState([])
    const [nro,setNro] = useState([])
    let imagen = ""
    const isMounted = useRef(false);
    function cargar(){ console.log("Categoria cargar..." + busca)
        //setSearch(params.busca)
        let url = Url + "/v4/Api/"
        const requestOptions = {
            method: "GET",
            header :{
                "Content-Type" : "application/json"
            }
        }
        url= Url + "Metodos/Get.php?action=categoria&busqueda=" + busca
        console.log("url:" + url)
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => { console.log("respuesta..." + url)
            console.log(data)
            if(data.response == "ok")
                setItems(data.items)
        })
        .catch(error=> console.log(error))
    }
    useEffect(()=>{ 
        // isMounted.current = false;
        cargar()
        // return () => isMounted.current = true;
        // setSearch(busca)
        // console.log("params!!!", busca )
        
        // setNro(Math.random(100))
        // const url = "http://localhost/ventory/v4/Api/"
        // const requestOptions = {
        //     method: "GET",
        //     header :{
        //         "Content-Type" : "application/json"
        //     }
        // }
        // fetch(url +"Metodos/Get.php?action=categorias", requestOptions)
        // .then(response => response.json())
        // .then(data => { console.log(data)
        //     setCats(data)
        // })
        // .catch(error=> console.log(error))
    },[])

    return(<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Categorias key={ nro } ></Categorias>
                    <Marcas></Marcas>           
                    {/* { cats.map(dato=>(
                        <li className="my-2">
                        <Link key={dato.des} categoria={ dato.des } to={`/categoria/${ dato.des }`}>{ dato.des }</Link>
                        <a key={dato.id} href={`/categoria/${ dato.des }`}  >{ dato.des }</a>
                        </li>
                    )) } */}
                </div>
                <div className="col-10">
                    <div className="container">
                        <div className="row py-3" >
                        <h2>Categoria: { busca }</h2>
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
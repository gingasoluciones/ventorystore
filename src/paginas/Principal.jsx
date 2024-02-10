import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Carrousel } from "../components/Carrousel"
import { Categorias } from "../components/Categorias"
import { Marcas } from "../components/Marcas"
import { ProductoCard } from "../components/ProductoCard"
import { Url } from "../components/Const"
export function Principal(props){ console.log("props",props)
    const params = useParams(); console.log("params", params)
    const [items, setItems] = useState([])
    let url =""
    let dir = ""
    return(<>
    
        <Carrousel></Carrousel>
    <main>
        <div className="container-fluid">
            <div className="row">
                
            </div>
            <div className="row d-flex justity-content-center">
                <div className="col-12">
                    <h3>Funciones</h3>
                </div>
                <div className="col-12">
                    <h4>Como propietario de tu inventario puedes:</h4>
                </div>
                <div className="col-12">
                    <ul>
                        <li>Registrar productos</li>
                        <li>Permitir compartir tu catalogo</li>
                        <li>visualizar pedidos realizados</li>
                    </ul>
                </div>
                <div className="col-12">
                    <h4>Los visitante de tu catalogo podrán</h4>
                </div>
                <div className="col-12">
                    <ul>
                        <li>Ver imagenes - cantidades y precios de tus productos</li>
                        <li>Permitir llevar un carrito de productos a cotizar</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </main>
    </>)
}
import { Link } from "react-router-dom";
import { Uri } from "./Const";
export function ProductoRow(props){
    return(<>
    <div className="col-md-12 col-xl-10">
        <div className="card shadow-0 border rounded-3">
        <div className="card-body">
            <div className="row">
            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                {props.datos.images.map((c,i)=>
                    <img key={c.nombre} src={`${Uri}${c.nombre}`} className="w-100" />
                )}
                <a href="#!">
                    <div className="hover-overlay">
                    <div className="mask"></div>
                    {/* //   style="background-color: rgba(253, 253, 253, 0.15); */}
                    </div>
                </a>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
                <h5>{ props.datos.des }</h5>
                <div className="d-flex flex-row">
                <div className="text-danger mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <span>{props.datos.marca}</span>
                </div>
                <div className="mt-1 mb-0 text-muted small">
                <span>{props.datos.categoria}</span>
                
                </div>
                
                <p className="text-truncate mb-4 mb-md-0">
                  { props.datos.descripcion }
                </p>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                <h4 className="mb-1 me-1">${ props.datos.valor }</h4>
                {/* <span className="text-danger"><s>$20.99</s></span>  */}
                </div>
                {/* <h6 className="text-success">Envío Gratis</h6> */}
                <div className="d-flex flex-column mt-4">
                <Link key={props.datos.id} to={ `/producto/${props.datos.id} ` } className="btn btn-primary btn-sm" type="button">Detalles</Link>
                {/* <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                    Agregar a Cotización
                </button> */}
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>)
    
}
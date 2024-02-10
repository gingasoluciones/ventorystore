import { Link } from "react-router-dom"
import { Uri, tienda } from "./Const"
export function ProductoCard(props){
    
    return(<>
        <div className="col-3">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">{props.datos.des}</p>
            <div
              className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              >
                {/* style="width: 35px; height: 35px;" */}
              {/* <p className="text-white mb-0 small">x4</p> */}
            </div>
          </div>
          {props.datos.images.map((c,i)=>
                    <img key={c.id} src={`${Uri}${c.nombre}?v=`} className="card-img-top" height={300} />
                )}
          {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
            className="card-img-top" alt="Laptop" /> */}
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small"><a href="#!" className="text-muted">{ props.datos.categoria }</a></p>
              <p className="small text-danger"><s>&nbsp;</s></p>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">{ props.datos.marca }</h5>
              <h5 className="text-dark mb-0">$ {props.datos.valor}</h5>
            </div>

            <div className="d-flex justify-content-between mb-2">
            <Link to={ `/producto/${props.datos.id} ` } className="btn btn-primary btn-sm" type="button">Detalles</Link>
              {/* <p className="text-muted mb-0">Available: <span className="fw-bold">6</span></p>
              <div className="ms-auto text-warning">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div> */}
            </div> 
          </div>
        </div>
    </>)
}
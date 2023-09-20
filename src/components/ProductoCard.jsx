import { Link } from "react-router-dom"
import { Uri } from "./Const"
export function ProductoCard(props){
    
    return(<>
        <div className="col-3">
          <div class="d-flex justify-content-between p-3">
            <p class="lead mb-0">{props.datos.des}</p>
            <div
              class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              >
                {/* style="width: 35px; height: 35px;" */}
              {/* <p class="text-white mb-0 small">x4</p> */}
            </div>
          </div>
          {props.datos.images.map((c,i)=>
                    <img key={c.id} src={`${Uri}${c.nombre}?v=`} className="card-img-top" height={300} />
                )}
          {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
            class="card-img-top" alt="Laptop" /> */}
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><a href="#!" class="text-muted">{ props.datos.categoria }</a></p>
              <p class="small text-danger"><s>&nbsp;</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">{ props.datos.marca }</h5>
              <h5 class="text-dark mb-0">$ {props.datos.valor}</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
            <Link to={ `/producto/${props.datos.id} ` } className="btn btn-primary btn-sm" type="button">Detalles</Link>
              {/* <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div> */}
            </div> 
          </div>
        </div>
    </>)
}
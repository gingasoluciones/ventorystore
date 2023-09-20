import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import { Url } from "./Const"
export function Marcas(){
  const [items,setItems] = useState([])
  function cargar(){ console.log("cargar...")
    const url = "http://localhost/ventory/v4/Api/"
    const requestOptions = {
        method: "GET",
        header :{
            "Content-Type" : "application/json"
        }
    }
    fetch(Url +"Metodos/Get.php?action=marcas", requestOptions)
    .then(response => response.json())
    .then(data => { console.log(data)
        setItems(data)
    })
    .catch(error=> console.log(error))

  }
  useEffect(()=>{ 
    cargar()
  },[])
    return(<>
        <aside className="bd-aside text-muted align-self-start mb-3 mb-xl-5 px-2">
  <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">Marcas</h2>
  <nav className="small" id="toc">
    <ul className="list-unstyled">
      { items.map(dato=>(
        <li key={dato.des} className="my-2">
          <a key={dato.id} href={`/marca/${ dato.des }`}>{ dato.des }</a>
          {/* <Link key={dato.id} to={`/categoria/${ dato.des }`} className="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#forms-collapse" aria-controls="forms-collapse">{dato.des}</Link> */}
        </li>
      )) }
      {/* <li className="my-2">
        <button className="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse" aria-controls="contents-collapse">Contents</button>
        <ul className="list-unstyled ps-3 collapse" id="contents-collapse">
          <li><a className="d-inline-flex align-items-center rounded" href="#typography">Typography</a></li>
          <li><a className="d-inline-flex align-items-center rounded" href="#images">Images</a></li>
          <li><a className="d-inline-flex align-items-center rounded" href="#tables">Tables</a></li>
          <li><a className="d-inline-flex align-items-center rounded" href="#figures">Figures</a></li>
        </ul>
      </li> */}
    </ul>
  </nav>
</aside>
    </>)
}
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css'
import { Barra } from './components/Barra';
import { Principal } from './paginas/Principal';
import { Busqueda } from './paginas/Busqueda';
import { Categoria } from './paginas/Categoria';
import { Marca } from './paginas/Marca';
import { Footer } from './components/Footer';
import { Producto } from './paginas/Producto';
import { Tienda } from './paginas/Tienda';
import { Carrito } from './paginas/Carrito';
import { BarraStore } from './components/BarraStore';
function App() {
  return (
    <>
      <Router >
      {/* basename={"/mystore"} */}
      {/* <Switch> */}
        <header>
          <BarraStore></BarraStore>
        </header>
        
        {/* <nav className="navbar navbar-expand-lg bg-light justify-content-between">
          <div className="container-fluid">
              <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
              <img src={logo} alt="logo" width={190} height={50} />
              </a>
              <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>

              </div>
          </div>
        </nav> */}
        
         <div className='container-fluid'>
            <div className='row'>
                {/* <div classNameName='col m-5'> */}
                    <Routes>
                      <Route path="/" element={<Tienda type="principal" key={"0"} value={"0"}/>}></Route>
                      {/* <Route path="/busqueda/:busca" element={<Busqueda/>}></Route> */}
                      <Route path="/tienda/:tienda" element={<Tienda/>}></Route>
                      <Route path="/producto/:id" element={<Producto/>}></Route>
                      <Route path="/carrito" element={<Carrito/>}></Route>
                      {/* <Route path="/:tienda/producto/:busca" element={<Producto/>}></Route> */}
                      {/* <Route path="/:tienda/producto/:busca" element={<Producto/>}></Route> */}
                      {/* --- */}
                      {/* <Route path="/:tienda/categoria/:categoria" element={<Tienda type={"categoria"} key={"/:busca"} />}></Route> */}
                      {/* <Route path="/categoria/Cable" element={<Categoria key={"Cable"} busca="Cable"/>}></Route>
                      <Route path="/categoria/Interruptores-Tomas" element={<Categoria key={"InterruptoresTomas"} busca="Interruptores-Tomas"/>}></Route>
                      <Route path="/categoria/Plasticos" element={<Categoria key={"Plasticos"} busca="Plasticos"/>}></Route>
                      <Route path="/categoria/Iluminacion" element={<Categoria key={"Iluminacion"}  busca="Iluminacion"/>}></Route>
                      <Route path="/categoria/Herramientas" element={<Categoria key={"Herramientas"} busca="Herramientas"/>}></Route>
                      <Route path="/categoria/Canaletas" element={<Categoria key={"Canaleta"} busca="Canaleta"/>}></Route>
                      <Route path="/categoria/Tuberia" element={<Categoria key={"Tuberia"} busca="Tuberia"/>}></Route>
                      <Route path="/categoria/Accesorios" element={<Categoria key={"Accesorios"} busca="Accesorios"/>}></Route>
                      <Route path="/categoria/Otros" element={<Categoria key={"Otros"} busca="Otros"/>}></Route>  */}

                      {/* ---marcas */}
                      {/* <Route path="/marca/:busca" element={<Marca/>}></Route> */}
                      {/* <Route path="/marca/Generico" element={<Marca key={'Generico'} busca="Generico" />}></Route>
                      <Route path="/marca/Otra" element={<Marca key={'Otra'} busca="Otra" />}></Route>
                      <Route path="/marca/Mercury" element={<Marca key={'Mercury'} busca="Mercury" />}></Route>
                      <Route path="/marca/Hikking" element={<Marca key={'Hikking'} busca="Hikking" />}></Route>
                      <Route path="/marca/Condumex" element={<Marca key={'Condumex'} busca="Condumex" />}></Route>
                      <Route path="/marca/Centelsa" element={<Marca key={'Centelsa'} busca="Centelsa" />}></Route>
                      <Route path="/marca/Procables" element={<Marca key={'Procables'} busca="Procables" />}></Route>
                      <Route path="/marca/Excelite" element={<Marca key={'Excelite'} busca="Excelite" />}></Route>
                      <Route path="/marca/Dexon" element={<Marca key={'Dexon'} busca="Dexon" />}></Route> */}
                    </Routes>
                {/* </div> */}
            </div>
        </div>
      {/* </Switch> */}
      </Router>
      <Footer></Footer>
    </>
  )
}
//export default withRouter(App);
export default App

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css'
import { Barra } from './components/Barra';
import { Principal } from './paginas/Principal';
import { Busqueda } from './paginas/Busqueda';
import { Categoria } from './paginas/Categoria';
import { Marca } from './paginas/Marca';
import { Footer } from './components/Footer';
import { Producto } from './paginas/Producto';
function App() {
  return (
    <>
      <Router>
      {/* <Switch> */}
        <header>
          <Barra/>
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
                      <Route path="/" element={<Principal/>}></Route>
                      <Route path="/busqueda/:busca" element={<Busqueda/>}></Route>
                      <Route path="/categoria/:busca" element={<Categoria/>}></Route>
                      <Route path="/marca/:busca" element={<Marca/>}></Route>
                      <Route path="/producto/:busca" element={<Producto/>}></Route>
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

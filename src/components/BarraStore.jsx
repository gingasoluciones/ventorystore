import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/logoweb.ico"
import {Url} from '../components/Const'
import { Navigate, useNavigate } from 'react-router';
import { useRef,useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export function BarraStore(){
    let navigate = useNavigate()
    let refBuscar = useRef()
    const handleBuscar=()=>{ console.log("buscando...")
        const busca = refBuscar.current.value
        location = "/busqueda/" + busca
    }

    const [items,setItems] = useState([])
  useEffect(()=>{ console.log("cargar...")
    const requestOptions = {
        method: "GET",
        header :{
            "Content-Type" : "application/json"
        }
    }
    fetch(Url +"Metodos/Get.php?action=categorias", requestOptions)
    .then(response => response.json())
    .then(data => { console.log("categorias", data)
        setItems(data)
    })
    .catch(error=> console.log(error))
  },[])
    return(<><Navbar bg="light" expand="lg">
      <Container fluid>
        <Link className="navbar-brand col-md-3 col-lg-3 me-0 px-3" to="/">
            <img src={logo} alt="logo" width={45} height={40} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="col-md-6 me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">Inicio</Link>
            {/* <NavDropdown title="Categorias" id="navbarScrollingDropdown">
            { items.map(dato=>(
              <NavDropdown.Item key={dato.des}>
                <Link key={dato.des} categoria={ dato.des } to={`/categoria/${ dato.des }`}>{ dato.des }</Link>
              </NavDropdown.Item>
            ))}
            </NavDropdown> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Quiero buscar..."
              className="me-2"
              aria-label="Search"
              ref={ refBuscar  }
            />
            <Button variant="outline-success" onClick={ handleBuscar }>Buscar</Button>
          </Form> */}
          <Nav
            className="my-4 my-lg-0"
            style={{ maxHeight: '50px' }}
            navbarScroll
          >
            <Link className='nav-link ' to={`/carrito/`} >Carrito</Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
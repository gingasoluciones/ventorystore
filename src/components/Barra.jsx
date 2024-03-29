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
export function Barra(){
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
    return(<><Navbar bg="dark" expand="lg">
      <Container fluid>
        <Link className="navbar-brand col-md-3 col-lg-3 me-0 px-3 d-flex " to="/">
            <img src={logo} alt="logo" width={45} height={40} /> &nbsp;<p className='px-3 pt-1 text-info '>Ventory</p>
        </Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="col-md-6 me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
import { useState } from 'react'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  //Estado que guarda lo que el usuario escribe en el input
  const [search, setSearch] = useState("")

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
              alt=""
              src="./src/assets/pngwing.com.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main'>
        <div className='container-busqueda'>
          <div className='colores'>
            <div className='busqueda'>
              <h3>Busca tu personaje favorito: </h3>
              <Buscador search={search} setSearch={setSearch}/>
            </div>
          </div>
        </div>
        <MiApi search={search}/>
      </div>
    <footer className='footer'>Derechos reservados</footer>
    </>
  )
}

export default App

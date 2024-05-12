import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MiApi({search}) {

    //Constante que contiene la url de la api
    const url = "https://rickandmortyapi.com/api/character"

    //Estado para guarda los datos traidos de la api
    const [personajesApi, setPersonajesApi] = useState([])

    //Funcion fetch para llamar a la API
    const getData = async () => {
    try{
      const data = await fetch(url)
      const result = await data.json()
      const personajes = result.results
      setPersonajesApi(personajes)
      console.log(personajes)

    } catch(error){
      console.log("Error")
    }
  }
  //Hook useEffect para manejar el ciclo de vida
  useEffect(() => {
      getData()
    }, [])
  
    //Variable que almacena los personajes filtrados
    let personajesFiltrados = []

    //Condicional que permite filtrar los elementos que muestra la API, es importante cambiar la variable que usamos en el método map para que se muestren solo los filtrados
  if (search === ""){
    personajesFiltrados = personajesApi
  } else {
    personajesFiltrados = personajesApi.filter((personaje) => personaje.name.toLowerCase().includes(search.toLowerCase()))
  }

return(
    <>
    {/* Div que nos muestra el metodo map mostrando el arreglo especificado */}
    <div className="cards-container">
        {
        personajesFiltrados.map((personaje, id) =>
        <div className="cards">
          <Card id={id} style={{ width: '18rem' }} bg="warning-subtle">
          <Card.Img variant="top" src={personaje.image} />
          <Card.Body>
            <Card.Title>{personaje.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Origen: {personaje.origin.name}</ListGroup.Item>
            <ListGroup.Item>Especie: {personaje.species}</ListGroup.Item>
            <ListGroup.Item>Estado: {personaje.status}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
        )
        }
    </div>
    {/* Ternario para manejar el error cuando no encuentra resultados  */}
    {personajesFiltrados.length === 0 ?<p>No se encontraron resultados</p>: ""}
    </>
)
}

export default MiApi
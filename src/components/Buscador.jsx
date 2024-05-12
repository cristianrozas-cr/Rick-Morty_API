

function Buscador({search, setSearch}) {

  //Estado que guarda lo que el usuario escribe en el input

  return (
    <>
      <input placeholder='Escribe el nombre' className='input' type="text" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
    </>
  )
}
export default Buscador

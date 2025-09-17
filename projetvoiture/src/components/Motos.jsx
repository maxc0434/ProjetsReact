

const Motos = ({ children, modele, year, color, engine}) => {

  
  return(
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>

          <p>Marque: {children} </p>
          <p>Modele: {modele} </p>
          <p>Millésime: {year} </p>
          <p>Couleur: {color} </p>
          <p>Puissance: {engine} </p>

      <div>
        {/* <img style={{ width: "200px", height: "200px" }} src={img} alt="" /> */}
      </div>
      
    </div>
  )

}
export default Motos;
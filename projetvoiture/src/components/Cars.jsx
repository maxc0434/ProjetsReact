import Wrapper from "./Wrapper";

const Cars = ({ color, children, age, year, img }) => {
  const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

  if (children) {
    return (
      <Wrapper>
        <div style={ {display:"flex", justifyContent:"space-between", alignItems:"center"} }>

          <div  >
            <p>Marque: {children}</p>
            <p>Age: {age}</p>
            <p>Sortie en : {year}</p>
            {colorInfo}
          </div>

          <div>
            <img style={{ width: "200px", height:"200px" }} src={img} alt="" />
          </div>
          
        </div>

      </Wrapper>
);

  }
  // return null // ce return est Facultatif
};

export default Cars;

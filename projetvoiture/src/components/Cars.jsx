import Wrapper from "./Wrapper";



const Car = ({ color, children, year, annee }) => {
  const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

  if (children) {
    return (
      
      <Wrapper>
        <p>Marque: {children}</p>
        <p>Age: {year}</p>
        <p>Sortie en : {annee}</p>
        {colorInfo}
      </Wrapper>
    );
  }
  // return null // ce return est Facultatif
};

export default Car;

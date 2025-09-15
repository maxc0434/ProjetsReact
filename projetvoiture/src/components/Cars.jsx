import Wrapper from "./Wrapper";



const Car = ({ color, children, age, year }) => {
  const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

  if (children) {
    return (
      
      <Wrapper>
        <p>Marque: {children}</p>
        <p>Age: {age}</p>
        <p>Sortie en : {year}</p>
        {colorInfo}
      </Wrapper>
    );
  }
  // return null // ce return est Facultatif
};

export default Car;

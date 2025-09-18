import styled from "styled-components";
import CustomBtn from "./CustomBtn";

// CSS
const Button = styled.button`
  padding: 0.5em 1.5em;
  border: 2px solid #0d3778;
  background: transparent;
  color: #0d3778;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  margin-bottom: 10px;
  margin-top: 5px;
  width: 150px;
`;

const Title = styled.h1`
  color: #040303;
  font-size: 30px;
  text-decoration: underline;
`;
const Card = styled.div`
  background: #3ffb97;
  background: linear-gradient(
    194deg,
    rgba(63, 251, 151, 0.71) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  opacity: 0.8;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 820px;
  margin: 3em auto;
`;
const Image = styled.div`
  width: "300px";
  height: "300px";
  margin-bottom: "10px";
`;

// FIN CSS



const Motos = ({ children, modele, year, color, engine, img, newImg }) => {
  return (
    <div>
      <Card>
        <Title> Marque: </Title>
        <h2> {children} </h2>
        <Title>Modele:</Title>
        <h2> {modele} </h2>
        <Title>Millésime: </Title>
        <h2>{year} </h2>
        <Title>Couleur:</Title>
        <h2> {color} </h2>
        <Title>Puissance: </Title>
        <h2>{engine} </h2>

        {/* <Button onClick={newImg}>Image au clic</Button> */}
                <CustomBtn onClick={newImg}>Image au clic</CustomBtn>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>

            {/* s'il y a une image importé a affiché dans la props img on l'affiche */}
          { img ? (
            <Image> 
              <img src={img} style={{width: "500px"}}/>   
            </Image>
          ) : (
            // sinon on affiche le texte
            <p>La Bête</p>
          )}

        </div>
      </Card>
    </div>
  );
};
export default Motos;

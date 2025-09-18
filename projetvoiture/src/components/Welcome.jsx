import CustomBtn from "./CustomBtn";

const Welcome = () => {
    

    function ok() {
        console.log("ok");
    }
    const bonjour = () => console.log("bonjour");
    const bonsoir = (arg) => console.log(arg);

    return(

        
<div>
    <button onClick= {ok}> ok</button>

    <button onClick= {bonjour}> Invoquer un fonction</button>

    <button onClick= { () => bonsoir("bonsoir")}> Invoquer un fonction avec argument</button>

    <button onClick= { () => console.log("bonne nuit")}> Console Log sur le bouton</button>


        
        <CustomBtn> Cliquez ici </CustomBtn>
        <CustomBtn style={{ backgroundColor: "blue" }}> Cliquez LA </CustomBtn>
        <CustomBtn style={{ backgroundColor: "orange", 
                            borderRadius: "45px", 
                            fontWeight: "bold", 
                            border: "solid", 
                            color: "green",
                            fontSize: "20px" }}> Non, CLIQUE ici en fait </CustomBtn>


</div>
)


}

export default Welcome
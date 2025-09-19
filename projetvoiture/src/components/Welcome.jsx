import CustomBtn from "./CustomBtn";

const monBoutonCustom = { 
    backgroundColor: "green"
}

const helloWorld = () => {
    alert('Hello World')
}

const monBoutonRouge = {

}

const changeColorBtn = (e) => {
     e.target.style.backgroundColor = 'red';
}

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


        
        <CustomBtn pimpMyBtn={monBoutonCustom} handleClick={() => alert("youpiiii")}> Cliquez ici </CustomBtn>
        <CustomBtn handleClick={helloWorld} > Cliquez LA </CustomBtn>
        
        <CustomBtn pimpMyBtn={monBoutonRouge} handleClick={changeColorBtn}> Non, CLIQUE ici en fait </CustomBtn>


</div>
)


}

export default Welcome
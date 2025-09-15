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

</div>
)
}

export default Welcome
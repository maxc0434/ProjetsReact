const Toto = props => {
  console.log(props)

  return (
    <div>
        <h2>{props.name}</h2>
        <button 
            // Compléter cette section
            onClick={ () => props.reponseTotoProps("ok")}
            disabled= {props.leState.disabled} 
            style= { {color: props.color} }
        >Réponse</button>

        <p>{props.leState.messageToto}</p>
    </div>
  )
}

export default Toto
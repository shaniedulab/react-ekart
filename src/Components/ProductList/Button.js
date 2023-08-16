function button(props){
    return(
        <button onClick={props.eventHandler} className="btn btn-primary" disabled={props.disable}>{props.children}</button>
    )
}

export default button;
import {useState} from 'react'
import PropTypes from 'prop-types'

export const CounterApp=({value})=>{

    //Si no interactúa con el 'value', puede quedar fuera del componente para que no
    //ocupe espacio en memoria siempre que se vuelva a renderizar...
    //OJO: Cuando cambia el estado (render), el componente SE VUELVE A EJECUTAR
    //console.log(`Render: ${value}`)
    
    //const [counter,setCounter]=useState(0);
    const [counter,setCounter]=useState(value);
    
    const handleAdd=(event)=>{
        //console.log(event);
        //console.log(newValue)

        //SetCounter: El estado cambió, re ejecuta la renderización del componente...
        //setCounter(counter+1) 
        setCounter((c)=>c+1)

    }

    const handleSus=(event)=>{
        setCounter((c)=>c-1)
    }

    const handleReset=(event)=>{
        setCounter((c)=>value)
    }

    //HOOKS: Funciones
    
    return(
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSus}>-1</button>
            <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
            
            {/*<input type="text"></input>*/}
        </>
    )
}

CounterApp.propTypes={
    value:PropTypes.number.isRequired
}

CounterApp.defaultProps={
    value:0
} 
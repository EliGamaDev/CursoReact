//import { Fragment } from "react"
//<></>: Indica FRAGMENT sin usar el import
import PropTypes from 'prop-types';

const newMsg='Eli';
const array=[1,2,3,4,5,6,7,8,9];
const obj={
    message:'Hola ',
    title:'Eli'
}

const getResultado=(a,b)=>{
    return a+b;
}

//Propiedades -> Properties -> props (es objeto) en argumento...
//Canal de comunicación con el padre: <React.StrictMode>

export const FirstApp=({title,subTitle,name})=>{
    /*return(  //Esto crea un div INNECESARIO, le da más procesamiento a React
        <div>
            <h1>First App de Eli</h1>
            <p>Primer párrafo...</p>
        </div>
    )*/ 

    /*if(!title){
        throw new Error('ERROR: title vacío...');
    }*/

    return(
        //<Fragment>
            //<h1>First App de Eli</h1>
            //<p>Primer párrafo...</p>
        //</Fragment>
        
        <>
            <h1 data-testid="test-title">{title}</h1>
            <h2>{subTitle}</h2>
            <h2>{subTitle}</h2>
            <h2>{name}</h2>
        </>
            /*Meter en <></>:
            {<h1>First App de {newMsg}</h1>
            <h2>ARRAY: {array}</h2>
            <h3>OBJETO: {obj.message+' '+obj.title}</h3>
            <code>OBJETO JSON: {JSON.stringify(obj)}</code>
            <p>Primer párrafo...</p>
            <br></br>
            <h3>Resultado: {getResultado(5,4)}</h3>}*/

            
        
    )
}

FirstApp.propTypes={
    title:PropTypes.string.isRequired,
    //subTitle:PropTypes.number.isRequired
    subTitle:PropTypes.string.isRequired
}

//Aplica propiedades por defecto... Anula mensajes error.
FirstApp.defaultProps={
    //title:'No hay título...',
    subTitle:'1234',
    name:'name: Eli'
}
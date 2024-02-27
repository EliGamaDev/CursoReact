//JSX: Código REACT: JS + XML
import React from 'react';
import ReactDOM from 'react-dom/client';
//import {HelloWorldApp} from './HelloWorldApp'
//import {FirstApp} from './FirstApp'
import {CounterApp} from './CounterApp'

//Estilo global CounterApp:
import './styles.css'

//Renderizar aplicación en DOM...
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={20}/>
    </React.StrictMode>
)

/*<FirstApp title="Hola, soy Eli..." />
        
    <HelloWorldApp ARRIBA: 'title' es PROPS />  
    title="Hola, soy Eli 2"
    subTitle={12345}
        
*/

/*

PRUEBAS: AAA -> Arrange (arreglar), Act (actuar) y Assert (afirmar)...

- Arrange: Preparamos el estado inicial: Iniciamos variables, importaciones necesarias...
- Act: Aplicamos acciones o estímulos al sujeto de pruebas: Llamar métodos, simular clicks, realizar
     acciones sobre el paso anterior... 
- Assert: Observar el comportamiento resultante: son los resultados esperados?

MITOS: 

- Hacen que mi app no tenga errores: X
- Las pruebas no pueden fallar: X
- Hacen más lenta mi aplicación: X
- Es una pérdida de tiempo: X
- Hay que probar todo: X

*/
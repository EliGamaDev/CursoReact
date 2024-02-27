/** @jest-environment jsdom */

import { render,screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en FisrtApp2',()=>{
    
    const title='Hola, soy Goku 2';

    test('Prueba 2.1: <FirstApp /> debe hacer MATCH con el SNAPSHOT',()=>{

        /*const {container}=render( <FirstApp title={title}/> );
        expect(container).toMatchSnapshot();*/

    })

    test('Prueba 2.2: Debe mostrar el mensaje: "Hola, soy Goku"',()=>{

        render( <FirstApp title={title}/> );
        //screen.debug();
        expect(screen.getByText(title)).toBeTruthy();

    })

    test('Prueba 2.3: Debe mostrar el título en un <h1></h1>',()=>{

        render( <FirstApp title={title}/> );
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);

    })

    test('Prueba 2.4: Debe mostrar el subtítulo enviado por PROPS',()=>{

        const title='Hola, soy Goku';
        const subTitle='Vegeta está en problemas, es por esto que...';
        render(
            <FirstApp 
                title= { title }
                subTitle={subTitle}
            />
        );

        expect(screen.getAllByText(subTitle).length).toBe(2);
        
    })

})
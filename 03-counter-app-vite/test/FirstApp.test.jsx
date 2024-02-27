/** @jest-environment jsdom */

import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en FisrtApp',()=>{
    
    /*test('Prueba 1.1: <FirstApp /> debe hacer MATCH con el SNAPSHOT',()=>{

        //Conveniente hacerla al final...
        const title='Hola, soy Goku';
        //render renderiza componentes en memoria:
        const {container}=render(<FirstApp title= { title }/>);

        //console.log(container)

        expect(container).toMatchSnapshot();

    })*/

    test('Prueba 1.2: Debe mostrar el título en un <h1></h1>',()=>{

        //DOM: Componente renderizado
        const title='Hola, soy Goku';
        const {container,getByText,getByTestId}=render(<FirstApp title= { title }/>);

        const h1=container.querySelector('h1'); //getElementById()
        //console.log(h1.innerHTML)

        /*expect(getByText(title)).toBeTruthy();
        //expect(h1.innerHTML.trim()).toBe(title.trim());
        expect(h1.innerHTML).toContain(title);*/

        expect(getByText(title)).toBeTruthy();

        //expect(getByTestId('test-title')).toBeTruthy();
        //expect(getByTestId('test-title').innerHTML).toBe(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    })

    test('Prueba 1.3: Debe mostrar el subtítulo enviado por PROPS',()=>{

        const title='Hola, soy Goku';
        const subTitle='Vegeta está en problemas, es por esto que...';
        const {getByText,getAllByText}=render(
            <FirstApp 
                title= { title }
                subTitle={subTitle}
            />
        );
        expect(getByText(title)).toBeTruthy();
        //expect(getByText(subTitle)).toBeTruthy();
        expect(getAllByText(subTitle).length).toBe(2);

    })

})
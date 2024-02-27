/** @jest-environment jsdom */

import { render,screen,fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"
//Tarea: Pruebas en <CounterApp />

//1. Debe hacer match con el Snapshot
//2. Debe mostrar el valor inicial de 100.

describe('Pruebas en <CounterApp />',()=>{

    const valorInicial=10;

    test('Prueba 3.1: Debe hacer match con el Snapshot',()=>{

        const {container}=render(<CounterApp value={valorInicial}/>);
        expect(container).toMatchSnapshot();

    })

    test('Prueba 3.2: Debe mostrar el valor incial de 100',()=>{

        render(<CounterApp value={100}/>);

        expect(screen.getByText('100')).toBeTruthy();
        //expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(valorInicial);

        //expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(valorInicial);


    })

    test('Prueba 3.3: Simular click incrementador +1',()=>{

        render(<CounterApp value={valorInicial}/>);
        //fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();

    })

    test('Prueba 3.4: Simular click decrementador -1',()=>{

        render(<CounterApp value={valorInicial}/>);
        //fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('-1'));
        
        expect(screen.getByText('9')).toBeTruthy();

    })

    test('Prueba 3.5: Simular click botón "RESET"',()=>{

        render(<CounterApp value={valorInicial}/>);
        //screen.debug();
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //screen.debug();
        //fireEvent.click(screen.getByText('Reset'));
        //screen.debug();

        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));

        expect(screen.getAllByText(valorInicial)).toBeTruthy();

    })

})
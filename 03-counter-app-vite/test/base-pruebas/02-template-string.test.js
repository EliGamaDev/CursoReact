import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string',()=>{

    test('Prueba 2: ',()=>{

        const name='Eliecer';
        const msg=getSaludo(name);

        expect(msg).toBe(`Hola ${name}`)
    })

})
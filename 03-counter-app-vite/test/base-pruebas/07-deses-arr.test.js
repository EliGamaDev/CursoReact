import {retornaArreglo} from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr',()=>{
    test('Prueba 5: Debe retornar un String y un Number',()=>{
        const [letter,numbers]=retornaArreglo();
        
        /*expect(letter).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letter).toBe('string');
        expect(typeof numbers).toBe('number');*/

        expect(letter).toStrictEqual(expect.any(String));
        expect(numbers).toStrictEqual(expect.any(Number));
    })
})
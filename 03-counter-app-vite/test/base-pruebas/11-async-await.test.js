import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('Pruebas en 11-async-await',()=>{

    test('Prueba 8.1: getImagen() async -> Debe retornar URL IMAGEN GIF',async()=>{
        const url=await getImagen();
        console.log(url);

        expect(typeof url).toBe('string');
    })

})
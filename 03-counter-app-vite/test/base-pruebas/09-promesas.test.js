import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

//Las pruebas en jest son SÍNCRONAS
describe('Pruebas en 09-promesas',()=>{

    test('Prueba 7.1: getHeroeByIdAsync(id) -> Debe retornar HÉROE por ID',(done)=>{
        const id=3;
        getHeroeByIdAsync(id)
            .then(hero=>{
                expect(hero).toEqual({
                    id: 3,
                    name: 'Superman',
                    owner: 'DC'
                });
                done();
            })
        
    })

    test('Prueba 7.2: getHeroeByIdAsync(id) -> Debe retornar ERROR si héroe NO EXISTE',(done)=>{
        const id=100;
        getHeroeByIdAsync(id)
            /*
            
            El siguiente código estaría demás porque se está evaluando el catch en esta test...
            
            .then(hero=>{
                expect(hero).toBeFalsy();
                done();
            })
            
            */
           
            .catch(error=>{
                expect(error).toBe(`No se pudo encontrar el héroe #${id}`)
                done();
            })
        
    })

})
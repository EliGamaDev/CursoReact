import {getHeroeById,getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp',()=>{
    
    test('Prueba 6.1: getHeroeById(id) -> Debe retornar HÉROE por ID',()=>{

        const id=3;
        const heroe=getHeroeById(id);
        //console.log(heroe);

        expect(heroe).toEqual({ id: 3, name: 'Superman', owner: 'DC' })

    })

    test('Prueba 6.2: getHeroeById(id) -> Debe retornar UNDEFINED si no existe ID',()=>{

        const id=10;
        const heroe=getHeroeById(id);
        
        //Ojo con valores como 'false'...
        //Evalúa: null, undefined y false...
        expect(heroe).toBeFalsy(); 
    })

    //TAREA: Probar con función getHeroesByOwner(owner)

    //1.1: Retornar un arreglo con los héroes de DC.
    //1.2: Largo arreglo=3.
    //1.3: toEqual() al arreglo filtrado.

    //2.1: Retornar un arreglo con los héroes de Marvel.
    //2.2: Largo arreglo=2.

    test('Prueba 6.3: getHeroesByOwner(owner) -> Debe retornar array héroes DC',()=>{
        const filtroOwner='DC';
        const arrHeroes=getHeroesByOwner(filtroOwner);
        
        expect(arrHeroes.length).toBe(3);
        expect(arrHeroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        //expect(arrHeroes).toEqual(heroes.filter((heroe)=>heroes.owner===filtroOwner));
    })

    test('Prueba 6.4: getHeroesByOwner(owner) -> Debe retornar array héroes MARVEL',()=>{
        const filtroOwner='Marvel';
        const arrHeroes=getHeroesByOwner(filtroOwner);
        
        expect(arrHeroes.length).toBe(2);
        expect(arrHeroes).toStrictEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
    })

})
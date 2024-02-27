import {usContext} from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj',()=>{
    test('Prueba 4: ',()=>{
        const testUser={
            clave:'OhMyEliness',
            nombre:'Eli',
            edad:30
        };

        const user=usContext(testUser);
        //console.log(user);

        expect(user).toStrictEqual({
            nombreClave: 'OhMyEliness',
            anios: 30,
            latlng: { lat: 14.1232, lng: -12.3232 },
            rango: 'Capitán'
        })
    })
})
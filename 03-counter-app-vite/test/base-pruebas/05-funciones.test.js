import {getUser,getUsuarioActivo} from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones',()=>{
    
    test('Prueba 3.1: getUser() debe retornar un OBJETO',()=>{

        const testUser={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user=getUser();
        //console.log(user);

        //toStrictEqual para OBJETOS o toEqual()
        expect(testUser).toStrictEqual(user) 

    });

    test('Prueba 3.1: getUsuarioActivo() debe retornar OBJETO',()=>{
        const nombre='Eli';
        const usuarioActivo=getUsuarioActivo(nombre);
        
        //expect(nombre).toEqual(usuarioActivo.username)
        expect(usuarioActivo).toEqual({
            uid:'ABC567',
            username:nombre
        })
    })

});


/*const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})*/
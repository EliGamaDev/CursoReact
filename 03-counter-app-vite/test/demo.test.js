describe('Pruebas en <DemoComponent/>', () => { 
    test('Primera prueba Eli: ',()=>{
    
        //Si no se lanza un error, se declara que la prueba PASA...
        /*if(1===0){
            throw new Error('No puede dividir entre 0...')
        }*/
    
        //JEST:
    
        //1. Inicialización
    
        const msg1='Hola Mundo';
    
        //2. Estímulo
    
        const msg2=msg1.trim();
    
        //3. Observar comportamiento esperado
    
        expect(msg1).toBe(msg2);
    
    })
 })


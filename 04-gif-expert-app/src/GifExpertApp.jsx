import {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp=()=>{

    //Hook de React para mantener ESTADO: useState
    const [categories, setCategories] = useState(['Pokémon','Dragon Ball']);

    const onAddCategory=()=>{

        //console.log('Agregar Categoría...');
        console.log(categories);
        //categories.push('Naruto');
        //setCategories((c)=>c+'Naruto');

        setCategories([...categories,'Naruto']);

        console.log(categories);
        //return categories;

    }
    
    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory setCategories={setCategories}/>

            {/* listado de gif */}
            <button onClick={onAddCategory}>Agregar Categoría</button>
            <ol>
                { categories.map(category=>{
                    return <li key={ category }>{category}</li>
                }) }
                {/*<li></li>*/}
            </ol>
                {/* gif item */}
        </>
    )

}
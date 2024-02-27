import { useState } from 'react';

export const AddCategory=()=>{

    const [inputValue, setinputValue] = useState('One Punch');

    const onInputChange=(/*event*/{target})=>{
        /*
        console.log(event.target.value);
        setinputValue(event.target.value);
        */
        setinputValue(target.value);
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        //console.log(inputValue);

        //setCategories([...categories,'Naruto']);
        setCategories([...categories,setinputValue]);
    }

    return(
        <form onSubmit={(event)=>{onSubmit(event)}}>
            <input 
                type="text" 
                placeholder="Buscar gifs..." 
                value={inputValue} 
                //onChange={(event)=>onInputChange(event)}
                onChange={onInputChange}
            />
        </form>
    )

}
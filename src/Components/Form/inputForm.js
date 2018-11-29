import React  from 'react';


function InputForm(props)
{   
    return (


    <div>
        <label>{props.title}</label>
        <input type='text' onChange={props.storeState} name={props.name} placeholder={props.placeholder} value={props.value} ></input>  
  
    </div>
    )
}

export default InputForm
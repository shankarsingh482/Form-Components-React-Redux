
import React, { Component}  from 'react';



function ButtonForm(props) {
    return (
        <div>
            <button onClick={props.storeState} name={props.name}>Submit</button>
        </div>
    )

}

export default ButtonForm;




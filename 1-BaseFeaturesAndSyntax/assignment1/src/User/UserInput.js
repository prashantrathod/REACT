import React from 'react';
import './User.css';

const userInput = (props) => {     
    return (
        <div className = "UserInput">
            <p>Enter In the Field Below:</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            
        </div>

    )
}

export default userInput;
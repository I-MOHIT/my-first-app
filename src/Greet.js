import React from 'react';  //Keep react in the scope of this component since JS does not understand html return types

// {
//     name: "Mohit",
//     age: "25"
// };

function Greet(props){  //First argument passed to a react component is called props
    return (
        <h2>
            {/* Supplied as a JS argument */}
        Welcome, {props.name}!  
        </h2>
    )
}

export default Greet;
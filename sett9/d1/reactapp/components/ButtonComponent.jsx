import React from 'react';

/*
const ButtonComponent = () => {
    const clickHere = () => {
        alert('Cliccato');
        console.log('Cliccato');
    };

    return (
        <button onClick={clickHere}> Click Here! </button>
    );
};

export default ButtonComponent;

const ButtonComponent = (props) => {
    return <button>{props.label}</button>
  }
  
export default ButtonComponent
*/

const ButtonComponent = (props) => {
    return (
        <button>{props.label}</button>
    )
}

export default ButtonComponent
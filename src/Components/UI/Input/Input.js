import React from 'react';

const input = (props) => {

    let inputElement = null;
    // console.log(props.validation);
    switch (props.elementType) {
        case ('input'): inputElement = <input {...props.elementConfig} value={props.value} validation={props.validation && <span>dupa</span>} onChange={props.inputValueChange}></input>
            break;
        case ('textarea'): inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.inputValueChange}></textarea>
            break;
        case ('checkbox'): inputElement = <label>
            <input type='checkbox' checked={props.inputChecked} onChange={props.inputValueChange}></input>{props.label}</label>
            break;
        default: inputElement = <input onChange={props.inputValueChange} />
    }

    return (
        <>
            {inputElement}
        </>
    );
}

export default input;
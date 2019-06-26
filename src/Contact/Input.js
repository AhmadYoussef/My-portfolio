import React from 'react';

const Input = (props) => {
    let elementTag = <input placeholder={props.placeHolder} />
    if (props.elementTag === 'textarea') {
        elementTag = <textarea placeholder={props.placeHolder} />
    }
    return (
        <>
            {elementTag}
        </>
    );
}

export default Input;
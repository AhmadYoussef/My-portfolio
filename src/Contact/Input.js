import React from 'react';

const Input = (props) => {
    let placeHolder = props.placeHolder.en;
    if (props.lang === 'de')
        placeHolder = props.placeHolder.de;
    let elementTag = <input placeholder={placeHolder} />
    if (props.elementTag === 'textarea') {
        elementTag = <textarea rows='4' placeholder={placeHolder} />
    }
    return (
        <>
            {elementTag}
        </>
    );
}

export default Input;
import React from 'react';
import style from './ModalBackDrop.module.css';

const modalBackDrop = (props) => {

    return (

        <div className={style.Wrap} onClick={props.modalBackDropClose}></div>

    )
}

export default modalBackDrop;
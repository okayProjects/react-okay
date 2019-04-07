import React from 'react';
import style from './Control.module.css'

const control = (props) => {
    return (
        <div className={style.Wrap}>
            {props.productName}
            <button onClick={props.remove} disabled={props.disabledRemoveButton} className={style.Button}>Usuń</button>
            {props.geProducts}
            <button onClick={props.add} disabled={props.disabledAddButton} className={style.Button}>Dodaj</button>
        </div>
    );
}

export default control;
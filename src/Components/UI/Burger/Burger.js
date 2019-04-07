import React from 'react';
import style from './Burger.module.css'

const burger = (props) => {
    const burgerActive = [style.Burger];
    if (props.burgerActive) {
        burgerActive.push(style.BurgerActive)
    }

    return (
        <div className={burgerActive.join(' ')} onClick={props.clicked}>
            <span className={style.Span}></span>
            <span className={style.Span}></span>
            <span className={style.Span}></span>
        </div>
    )
}

export default burger;
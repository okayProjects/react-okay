import React from 'react';
import style from './NavItem.module.css';


const navItem = (props) => (
    <>
        <li className={style.NavLi}>{props.children}</li>
    </>)


export default navItem
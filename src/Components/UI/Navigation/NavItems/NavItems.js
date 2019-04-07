import React from 'react';
import NavItem from '../NavItem/NavItem';
import style from './NavItems.module.css';
import { NavLink } from 'react-router-dom';

const navItems = (props) => {

    return (
        <nav className={props.navToggle ? style.NavShow : style.NavHide}>
            <ul className={style.Ul}>
                <NavItem ge='angielski ogólny'><NavLink to='/generalEnglish' exact>angielski ogólny</NavLink></NavItem>
                <NavItem b2b='angielski biznesowy'><NavLink to='/business' exact>angielski biznesowy</NavLink></NavItem>
                <NavItem abroad='angielski w anglii'><NavLink to='/abroad' exact>angielski w anglii</NavLink></NavItem>
                <NavItem parntner='partner'><NavLink to='/parnerZone' exact>strefa partnera</NavLink></NavItem>
            </ul>
        </nav>
    )
}


export default navItems;
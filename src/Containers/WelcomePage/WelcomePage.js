import React from 'react';
import style from './WelcomePage.module.css';
import WelcomeSlogan from '../../Components/WelcomeSlogan/WelcomeSlogan';
import ShopBuilder from '../../Containers/ShopBuilder/ShopBuilder';
// import Offer from '../../Components/Offer/Offer';
import { Route, Switch } from 'react-router-dom';

const welcomePage = (props) => {

    return (
        < main className={style.main} >
            <Switch>
                <Route path='/abroad' component={ShopBuilder} />
                <Route path='/offer' component={WelcomeSlogan} />
                <Route path='/' component={WelcomeSlogan} />
            </Switch>
        </main >
    )
}

export default welcomePage;
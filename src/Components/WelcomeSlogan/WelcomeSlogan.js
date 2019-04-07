import React, { Component } from 'react';
import style from './WelcomeSlogan.module.css';
import Burger from '../UI/Burger/Burger';
import NavItems from '../UI/Navigation/NavItems/NavItems';
import Offer from '../Offer/Offer';

class WelcomeSlogan extends Component {

    state = {
        welcomePageLoaded: false,
        navShow: false,
    }

    navActivatorHandler = () => {
        this.setState(prevState => {
            return { navShow: !prevState.navShow };
        });
    }

    componentDidMount() {
        const txt = 'Witamy w ';
        const p = document.getElementById('slogan');
        let txtIndex = 0;

        const greet = 'Dzień dobry';
        const p2 = document.getElementById('welcome');
        let greetIndex = 0;

        const liAll = document.querySelectorAll('div>ul li');
        const lis = [...liAll];
        let timeOut = 800;

        const txtDisplayed = () => {

            if (txtIndex === txt.length) {
                return
            } else {
                p.textContent += txt[txtIndex]
                ++txtIndex;
            }
        }
        const greetDisplayed = () => {
            if (greetIndex === greet.length) {
                return
            } else {
                p2.textContent += greet[greetIndex]
                ++greetIndex;
            }
        }
        setInterval(txtDisplayed, 200)

        setTimeout(() => {
            setInterval(greetDisplayed, 100)

        }, 3200);

        setTimeout(() => {
            for (let key in lis) {
                setInterval(() => {
                    lis[key].style.opacity = '1';
                }, timeOut += 300);
            }
        }, timeOut);

        setTimeout(() => {
            this.setState(prevState => (
                { welcomePageLoaded: !prevState.welcomePageLoaded }
            ))
        }, 4400);

    }

    render() {
        const pageVanish = [style.WelcomeSlogan];
        const sloganOff = [style.Slogan];
        const helloOff = [style.Hello];
        const logoTranslate = [style.Ul];
        if (this.state.welcomePageLoaded) {
            pageVanish.push(style.Off);
            sloganOff.push(style.Off);
            helloOff.push(style.Off);
            logoTranslate.push(style.LogoTranslate)
        }

        return (
            <>
                <NavItems navToggle={this.state.navShow} />
                <Burger burgerActive={this.state.welcomePageLoaded} clicked={this.navActivatorHandler} />
                <Offer offerActive={this.state.welcomePageLoaded} />
                <div className={pageVanish.join(' ')}>
                    <p id='slogan' className={sloganOff.join(' ')}></p>
                    <ul id='ul' className={logoTranslate.join(' ')}>
                        <li>O</li>
                        <li>k</li>
                        <li>a</li>
                        <li>y</li>
                    </ul>
                    <p id='welcome' className={helloOff.join(' ')}></p>
                </div>
            </>
        );
    }
}

export default WelcomeSlogan;
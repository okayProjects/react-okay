import React, { Component } from 'react';
import NavItems from '../../Components/UI/Navigation/NavItems/NavItems';
import Burger from '../../Components/UI/Burger/Burger';
import Logo from '../../Components/UI/Logo/Logo'
import style from './ShopBuilder.module.css';
import Shop from '../../Components/Shop/Shop';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Shop/OrderSummary/OrderSummary';
import axios from '../../../src/axios-shop';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { NavLink } from 'react-router-dom'

const COURSE_PRICES = {
    ge20: 177,
    ge26: 207,
    ge32: 227,
    geBusiness32: 227,
    geCombo30: 487
}

const ACCOMMODATION_PRICES = {
    noAcco: 0,
    shb: 145,
    shbp: 205,
    sbo: 125,
    thb: 125
}

class ShopBuilder extends Component {

    state = {
        geProducts: null,
        courseTypeChosen: '',
        accommodationTypeChosen: 'Bez zakwaterowania',
        accommodation: 'noAcco',
        totalCoursePrice: 0,
        totalAccommodationPrice: 0,
        spinnerLoading: false,
        navShow: false,
        modalActivator: false,
    }

    componentDidMount() {
        axios.get('https://okay-bfea3.firebaseio.com/geProducts.json')
            .then(response => {
                this.setState({ geProducts: response.data });
            });
    }

    addCourseHandler = (type, productName) => {
        const geProducts = { ...this.state.geProducts };
        const updatedGeCourses = geProducts[type] + 1;
        geProducts[type] = updatedGeCourses;
        const price = COURSE_PRICES[type];

        this.setState(prevState => {
            return {
                geProducts,
                totalCoursePrice: prevState.totalCoursePrice + price,
                courseTypeChosen: productName
            }
        })
    }

    removeCourseHandler = (type) => {
        const geProducts = { ...this.state.geProducts };
        if (geProducts[type] <= 0) {
            return
        }
        const updatedGeCourses = geProducts[type] - 1;
        geProducts[type] = updatedGeCourses;
        const price = COURSE_PRICES[type];

        this.setState(prevState => {
            return {
                geProducts,
                accommodation: prevState.accommodation = 'noAcco',
                totalAccommodationPrice: prevState.totalAccommodationPrice = 0,
                totalCoursePrice: prevState.totalCoursePrice - price,
                courseTypeChosen: ''
            };
        });
    }

    addAccomodationHandler = (e) => {
        const accoTypes = {
            noAcco: 'Bez zakwaterowania',
            shb: 'Single Half Board',
            shbp: 'Single Half Board Premium',
            sbo: 'Single Breakfast Only',
            thb: 'Twin Half Board'
        }

        const accommodation = e.target.value;
        const price = ACCOMMODATION_PRICES[e.target.value];
        let accommodationTypeChosen = accoTypes[e.target.value];

        this.setState(prevState => {
            prevState.totalAccommodationPrice = 0;

            return {
                totalAccommodationPrice: prevState.totalAccommodationPrice + price,
                accommodation,
                accommodationTypeChosen
            };
        });
    }

    modalActivatorHandler = () => {
        this.setState(prevState => {
            return {
                modalActivator: !prevState.modalActivator
            }
        })
    }

    placeOrderHandler = (customer) => {
        console.log(customer);
        this.setState({ spinnerLoading: true })
        const order = {
            accomodation: this.state.accommodationTypeChosen,
            accoPrice: this.state.totalAccommodationPrice,
            course: this.state.courseTypeChosen,
            coursePrice: this.state.totalCoursePrice,
            balanceDue: this.state.totalCoursePrice + this.state.totalAccommodationPrice,
            customer
        }

        // if (statusText === 'OK') {
        //     console.log(statusText);
        //     this.setState({
        //         spinnerLoading: true,
        //         geProducts: {
        //             ge20: 0,
        //             ge26: 0,
        //             ge32: 0,
        //             geBusiness32: 0,
        //             geCombo30: 0
        //         },
        //         totalCoursePrice: 0,
        //         totalAccommodationPrice: 0,
        //         modalActivator: false,
        //     });
        // } else {
        //     console.log('popraw formularz');
        //     this.setState({
        //         spinnerLoading: false, geProducts: {
        //             ge20: 0,
        //             ge26: 0,
        //             ge32: 0,
        //             geBusiness32: 0,
        //             geCombo30: 0
        //         },
        //         totalCoursePrice: 0,
        //         totalAccommodationPrice: 0,
        //         modalActivator: false,
        //     })
        // }
        // return order

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    spinnerLoading: false,
                    geProducts: {
                        ge20: 0,
                        ge26: 0,
                        ge32: 0,
                        geBusiness32: 0,
                        geCombo30: 0
                    },
                    totalCoursePrice: 0,
                    totalAccommodationPrice: 0,
                    modalActivator: false,
                });
            })
            .catch(error => {
                this.setState({
                    spinnerLoading: false, geProducts: {
                        ge20: 0,
                        ge26: 0,
                        ge32: 0,
                        geBusiness32: 0,
                        geCombo30: 0
                    },
                    totalCoursePrice: 0,
                    totalAccommodationPrice: 0,
                    modalActivator: false,
                })
            })
    }

    burgerActivatorHandler = () => {
        this.setState(prevState => {
            return { navShow: !prevState.navShow };
        });
    }

    modalBackDropCloseHandler = () => {
        this.setState(prevState => {
            return {
                modalActivator: prevState.modalActivator = false,
                geProducts: prevState.geProducts = {
                    ge20: 0,
                    ge26: 0,
                    ge32: 0,
                    geBusiness32: 0,
                    geCombo30: 0
                },
                courseTypeChosen: prevState.courseTypeChosen = '',
                accommodationTypeChosen: prevState.accommodationTypeChosen = 'Bez zakwaterowania',
                accommodation: prevState.accommodation = 'noAcco',
                totalCoursePrice: prevState.totalCoursePrice = 0,
                totalAccommodationPrice: prevState.totalAccommodationPrice = 0,
            };
        });
    }



    render() {

        const buttonDisabledInfo = { ...this.state.geProducts };
        for (let key in buttonDisabledInfo) {
            buttonDisabledInfo[key] = buttonDisabledInfo[key] <= 0
        };

        let shop = <Spinner />
        if (this.state.geProducts) {

            const courseChosen = Object.values(this.state.geProducts)
                .reduce((prev, curr) => {
                    return prev + curr
                });

            shop = <Shop geProducts={this.state.geProducts}
                accoTypes={this.state.accommodation}
                addCourse={this.addCourseHandler}
                removeCourse={this.removeCourseHandler}
                disabledRemoveCourse={buttonDisabledInfo}
                disabledAddCourse={courseChosen}
                select={this.addAccomodationHandler}
                accommodation={this.state.accommodation}
                geCoursePrices={COURSE_PRICES}
                accoPrices={ACCOMMODATION_PRICES}
                totalAccommodationPrice={this.state.totalAccommodationPrice}
                totalCoursePrice={this.state.totalCoursePrice}
                modalActivator={this.modalActivatorHandler} />
        }

        const modal =
            <Modal
                modalActivator={this.state.modalActivator}
                modalBackDropClose={this.modalBackDropCloseHandler}
                placeOrder={this.placeOrderHandler}
                spinnerLoading={this.state.spinnerLoading}
                inputValueChange={this.inputValueChangeHandler}
            >

                <OrderSummary
                    courseTypeChosen={this.state.courseTypeChosen}
                    totalAccommodationPrice={this.state.totalAccommodationPrice}
                    totalCoursePrice={this.state.totalCoursePrice}
                    accommodation={this.state.accommodationTypeChosen} />

            </Modal >

        return (
            <div className={style.Wrap}>
                <NavItems navToggle={this.state.navShow} />
                <NavLink to='/offer' exact><Logo /></NavLink>
                {this.state.modalActivator && modal}
                <Burger burgerActive={true} clicked={this.burgerActivatorHandler} />
                {shop}
            </div>
        );
    }
}

export default withErrorHandler(ShopBuilder, axios);
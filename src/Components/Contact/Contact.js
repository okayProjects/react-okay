import React, { Component } from 'react';
import style from './Contact.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import axios from '../../../src/axios-shop';

class Contact extends Component {

    state = {
        customer: {
            name: {
                elementType: 'input',
                elementConfiguration: {
                    type: 'text',
                    placeholder: 'Twoje imię',
                    name: 'name'
                },
                value: '',
            },
            surname: {
                elementType: 'input',
                elementConfiguration: {
                    type: 'text',
                    placeholder: 'Twoje nazwisko',
                    name: 'surname'
                },
                value: '',
            },
            email: {
                elementType: 'input',
                elementConfiguration: {
                    type: 'email',
                    placeholder: 'Twój adres e-mail',
                    name: 'email'
                },
                value: '',
            },
            phoneNumber: {
                elementType: 'input',
                elementConfiguration: {
                    type: 'number',
                    placeholder: 'Twój numer telefonu',
                    name: 'phoneNumber'
                },
                value: '',
            },
            comments: {
                elementType: 'textarea',
                elementConfiguration: {
                    type: 'text',
                    placeholder: 'Jeśli chcesz, wpisz tutaj swoje uwagi',
                    name: 'textarea'
                },
                value: '',
            },
            street: {
                elementType: 'input',
                elementConfiguration: {
                    type: 'text',
                    placeholder: 'Ulica i numer domu/mieszkania',
                    name: 'street',
                },
                value: '',
            },
            city: {
                elementType: 'input',
                elementConfiguration: {
                    type: 'text',
                    placeholder: 'Kod pocztowy i miejscowość',
                    name: 'city'
                },
                value: '',
            },
            confirmation: {
                elementType: 'checkbox',
                elementConfiguration: {
                    type: 'checkbox',
                    name: 'confirmation'
                },
                conditionsConfirmed: false,
            }
        },
        validationErrors: {
            name: false,
            surname: false,
            phoneNumber: false,
            city: false,
            street: false,
            email: false,
            conditionsConfirmed: false,
            formCorrect: false
        }
    }

    inputValueChangeHandler = (e, inputId) => {
        const customer = { ...this.state.customer };

        const customerDataCopy = { ...customer[inputId] }
        const confirmationData = customer[inputId].conditionsConfirmed;
        customerDataCopy.value = e.target.value;
        customer[inputId] = customerDataCopy;
        customer[inputId].conditionsConfirmed = !confirmationData

        this.setState({ customer })
    }

    submitOrderFormHandler = (e) => {
        e.preventDefault();
        const validation = this.validationFormCorrect();
        const validationErrors = { ...this.state.validationErrors }

        for (let key in validation) {
            validationErrors[key] = !validation[key].value
        }

        const customer = {}
        for (let key in this.state.customer) {
            customer[key] = this.state.customer[key].value;
        }

        if (validation.formCorrect) {
            this.props.placeOrder(customer)
        } else {
            this.setState({ validationErrors })
        }
    }


    validationFormCorrect = () => {
        let name = false;
        let surname = false;
        let email = false;
        let street = false;
        let city = false;
        let phoneNumber = false;
        let conditionsConfirmed = false;
        let formCorrect = false;

        if (this.state.customer.name.value.length > 3) {
            name = true;
        }
        if (this.state.customer.name.value.length > 6) {
            phoneNumber = true;
        }
        if (this.state.customer.surname.value.length >= 0) {
            surname = true;
        }
        if (this.state.customer.city.value.length >= 0) {
            city = true;
        }
        if (this.state.customer.street.value.length >= 0) {
            street = true;
        }
        if (this.state.customer.email.value.indexOf('@') !== -1) {
            email = true;
        }
        if (this.state.customer.confirmation.conditionsConfirmed) {
            conditionsConfirmed = true;
        }
        if (name && surname && phoneNumber && city && street && email && conditionsConfirmed) {
            formCorrect = true;
        }

        return (
            {
                name,
                surname,
                phoneNumber,
                city,
                street,
                email,
                conditionsConfirmed,
                formCorrect
            }
        )
    }

    render() {

        const orderFormArray = [];
        for (let key in this.state.customer) {
            orderFormArray.push({
                id: key,
                config: this.state.customer[key]
            })
        };

        return (
            <form className={style.Form} onSubmit={this.submitOrderFormHandler}>
                {orderFormArray.map(singleInput => (
                    <Input key={singleInput.id}
                        elementType={singleInput.config.elementType}
                        elementConfig={singleInput.config.elementConfiguration}
                        value={singleInput.config.value}
                        validation={this.state.validationErrors}
                        label='Zapoznałem się i akceptuję regulamin'
                        inputValueChange={(e) => this.inputValueChangeHandler(e, singleInput.id)}
                    />
                ))}
                <div className={style.ButtonWrap}>
                    <Button btnType='LeftToRight' click={this.props.modalBackDropClose}>Anuluj</Button>
                    <Button btnType='LeftToRight'>Kontynuuj</Button>
                </div>
            </form>
        );
    }
}

export default Contact;
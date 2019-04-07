import React, { Component } from 'react';
import style from './Accommodation.module.css';

class Accommodation extends Component {

    render() {

        const option = this.props.productNames.map((productName, index) => {
            const accoPrices = Object.values(this.props.accoPrices)
            return (
                <option className={style.Option} key={productName.type} value={productName.type}>{`${productName.productName} Cena: ${accoPrices[index]}£`}</option>
            )
        })

        return (
            <label className={style.Label}>Wybierz rodzaj zakwaterowania:
            <select className={style.Select} onChange={this.props.select}>
                    {option}
                </select>
            </label>);
    }
}

export default Accommodation;

import React from 'react';
import style from './OrderSummary.module.css';

const orderSummary = (props) => {

    return (
        <div className={style.Wrap}>
            <h3 className={style.H3}>Podsumowanie zamówienia</h3>
            <p>Wybrany kurs to: <strong>{props.courseTypeChosen}</strong></p>
            <span>Wybrana forma zakwaterownaia to: <strong>{props.accommodation}</strong></span>
            <p>Cena kursu: <strong>{props.totalCoursePrice}</strong></p>
            <p>Cena zakwaterowania: <strong>{props.totalAccommodationPrice}</strong></p>
            <p>Cena całkowita: <strong>{props.totalAccommodationPrice + props.totalCoursePrice}</strong></p>
        </div>
    );
}

export default orderSummary;
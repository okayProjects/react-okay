import React from 'react';
import Control from './Control';
import style from './Controls.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import Button from '../../UI/Button/Button';


const controls = (props) => {
    const prices = Object.values(props.geCoursePrices)

    const controlType = props.controlsTypes.map((control, index) => {
        return <Control
            key={control.productName}
            productName={`${control.productName} Cena: ${prices[index]}£`}
            disabledRemoveButton={props.disabledRemoveButton[control.type]}
            disabledAddButton={props.disabledAddButton}
            geProducts={props.geProducts[control.type]}
            add={() => props.add(control.type, control.productName)}
            remove={() => props.remove(control.type)} />
    });


    const controls = (
        <div className={style.OrderWrapper}>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Wartość zamówienia łącznie to: {props.totalCoursePrice + props.totalAccommodationPrice}</p>
            <Button btnType='TriangleDot' disabled={!props.totalCoursePrice} click={props.modalActivator}>Kontynuuj</Button>
        </div>
    )

    return (
        <div className={style.SectionWrapper}>
            {props.spinner ? <Spinner /> : controls}
            <div className={style.Wrap}>
                {controlType}
            </div>
        </div>
    );
}

export default controls;
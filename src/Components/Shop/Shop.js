import React from 'react';
import GeneralEnglish from '../Shop/ShopProducts/GeneralEnglish';
import Accommodation from '../Shop/Accommodation/Accommodation';
import Controls from './Controls/Controls';
import style from './Shop.module.css';
import AccommodationDescription from './Accommodation/AccomodationDescription';

const shop = (props) => {

    const controlsTypes = {
        ge: [
            { productName: 'General English 20.', type: 'ge20' },
            { productName: 'General English 26.', type: 'ge26' },
            { productName: 'General English 32', type: 'ge32' },
            { productName: 'GE / Business 32', type: 'geBusiness32' },
            { productName: 'General English Combo30', type: 'geCombo30' }
        ],
        accoTypes: [
            { productName: 'Bez zakwaterowania.', type: 'noAcco' },
            { productName: 'Pokój jednoosobowy ze śniadaniem i obiadokolacją.', type: 'shb' },
            { productName: 'Pokój jednoosobowy Premium ze śniadaniem i obiadokolacją.', type: 'shbp' },
            { productName: 'Pokój jednoosobowy ze śniadaniem.', type: 'sbo' },
            { productName: 'Pokój dwuosobowy ze śniadaniem i obiadokolacją.', type: 'thb' }
        ]
    };

    let transformedGeCourseType = Object.keys(props.geProducts)
        .map(geProduct => {
            return [...Array(props.geProducts[geProduct])].map((_, index) => {
                return (
                    <div key={geProduct + index}>
                        <GeneralEnglish type={geProduct} />
                        <AccommodationDescription accommodation={props.accommodation} />
                        <Accommodation
                            productNames={controlsTypes.accoTypes}
                            select={props.select}
                            accoPrices={props.accoPrices} />
                    </div>
                )
            });
        })
        .reduce((arr, ell) => {
            return arr.concat(ell);
        }, [])

    if (transformedGeCourseType.length === 0) {
        transformedGeCourseType = <p style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Proszę wybrać rodzaj kursu</p>
    }

    return (
        <>
            <div className={style.Wrap}>
                {transformedGeCourseType}
            </div>
            <Controls
                controlsTypes={controlsTypes.ge}
                geProducts={props.geProducts}
                add={props.addCourse}
                remove={props.removeCourse}
                disabledRemoveButton={props.disabledRemoveCourse}
                disabledAddButton={props.disabledAddCourse}
                geCoursePrices={props.geCoursePrices}
                totalAccommodationPrice={props.totalAccommodationPrice}
                totalCoursePrice={props.totalCoursePrice}
                modalActivator={props.modalActivator} />
        </>
    )
}

export default shop;


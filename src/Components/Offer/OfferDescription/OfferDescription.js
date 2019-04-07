import React from 'react';
import style from './OfferDescription.module.css';

const offerDescription = (props) => (
    <div className={style.Wrap}>
        <h1 className={style.Heading}>{props.heading}</h1>
        <p className={style.Paragraph}>{props.paragraph}</p>
    </div>
)

export default offerDescription;
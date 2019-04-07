import React, { Component } from 'react';
import style from './AccommodationDescription.module.css';
import PropTypes from 'prop-types';

class AccommodationDescription extends Component {

    render() {

        let accommodationType = null;

        switch (this.props.accommodation) {
            case ('shb'): accommodationType = <div className={style.Wrap}><h2 className={style.Heading}>Forma mojego zakwaterowania to:</h2><p className={style.Paragraph}>u rodziny.W cenę wliczone jest śniadanie i obiadokolacja. Podana cena dotyczy jednego tygodnia</p></div>
                break;

            case ('shbp'): accommodationType = <div className={style.Wrap}><h2 className={style.Heading}>Forma mojego zakwaterowania to:</h2><p className={style.Paragraph}>u rodziny - pokój o podwyższonym standardzie. W cenę wliczone jest śniadanie i obiadokolacja. Podana cena dotyczy jednego tygodnia</p></div>
                break;

            case ('sbo'): accommodationType = <div className={style.Wrap}><h2 className={style.Heading}>Forma mojego zakwaterowania to:</h2><p className={style.Paragraph}>u rodziny. W cenę wliczone jest śniadanie. Podana cena dotyczy jednego tygodnia</p></div>
                break;

            case ('thb'): accommodationType = <div className={style.Wrap}><h2 className={style.Heading}>Forma mojego zakwaterowania to:</h2><p className={style.Paragraph}>u rodziny. Będę mieszkał z wskazaną przez siebie osobą. W cenę wliczone jest śniadanie i obiadokolacja. Podana cena dotyczy jednego tygodnia</p></div>
                break;
            default: accommodationType = null;
        }

        return (accommodationType);
    }
}

AccommodationDescription.propTypes = {
    accommodation: PropTypes.string.isRequired
}

export default AccommodationDescription;



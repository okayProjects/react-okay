import React, { Component } from 'react';
import style from './GeneralEnglish.module.css';
import PropTypes from 'prop-types';

class GeneralEnglish extends Component {

    render() {

        let courseType = null;

        switch (this.props.type) {
            case ('ge20'): courseType = <div className={style.Wrap}><h2 className={style.Heading}>Zamawiam kurs języka angielskiego ogólnego</h2><p className={style.Paragraph}>Kurs składa się z 20 godzin lekcyjnych tygodniowo w grupie międzynarodowej nie większej niż 15 osób</p></div>
                break;
            case ('ge26'): courseType = <div className={style.Wrap}><h2 className={style.Heading}>Zamawiam kurs języka angielskiego ogólnego</h2><p className={style.Paragraph}>Kurs składa się z 26 godzin lekcyjnych tygodniowo w grupie międzynarodowej nie większej niż 15 osób</p></div>
                break;
            case ('ge32'): courseType = <div className={style.Wrap}><h2 className={style.Heading}>Zamawiam kurs języka angielskiego ogólnego</h2><p className={style.Paragraph}>Kurs składa się z 32 godzin lekcyjnych tygodniowo w grupie międzynarodowej nie większej niż 15 osób</p></div>
                break;
            case ('geBusiness32'): courseType = <div className={style.Wrap}><h2 className={style.Heading}>Zamawiam kurs języka angielskiego ogólnego łączonego z elementami języka biznesowego</h2><p className={style.Paragraph}>Kurs składa się z 32 godzin lekcyjnych tygodniowo w grupie międzynarodowej nie większej niż 15 osób</p></div>
                break;
            case ('geCombo30'): courseType = <div className={style.Wrap}><h2 className={style.Heading}>Zamawiam kurs języka angielskiego ogólnego łączonego z językiem biznesowym</h2><p className={style.Paragraph}>Kurs składa się z 30 godzin lekcyjnych tygodniowo w grupie międzynarodowej nie większej niż 15 osób</p></div>
                break;
            default: courseType = null;

        }
        return (courseType);
    }
}

GeneralEnglish.propTypes = {
    type: PropTypes.string.isRequired
}

export default GeneralEnglish;
import React, { Component } from 'react';
import style from './OfferPicture.module.css';
import Button from '../../UI/Button/Button';

class offerPicture extends Component {
    componentDidMount() {
        // console.log(document.querySelectorAll('img'));
    }
    render() {
        const singleElement = this.props.type.map(element => {
            return (
                <h4 className={style.OfferElement} key={element}>{element}</h4>
            )
        })

        const pictures = this.props.src.map((picture, index) => (
            <img className={style.Image} key={this.props.alt + index} src={picture} alt={this.props.alt} />
        ))
        return (
            <>
                <div className={style.Wrap}>
                    {pictures}
                    {singleElement}
                    <div className={style.ButtonWrap}>
                        <Button clicked={this.props} btnType='Shake'>
                            <span>ZOBACZ WIĘCEJ</span>
                            <span>ZAPRASZAMY</span>
                        </Button>
                    </div>
                </div>
            </>
        )
    }
}

export default offerPicture;



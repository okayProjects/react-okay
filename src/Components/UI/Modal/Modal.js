import React from 'react';
import style from './Modal.module.css';
import Aux from '../../../Containers/hoc/auxx';
import ModalBackDrop from '../ModalBackDrop/ModalBackDrop';
import Spinner from '../Spinner/Spinner';
import Contact from '../../Contact/Contact';

const modal = (props) => {

    return (
        <Aux>
            {props.modalActivator && <ModalBackDrop modalBackDropClose={props.modalBackDropClose} />}
            <div className={style.Modal}>
                {!props.spinnerLoading ? props.children : <Spinner />}
                <Contact
                    inputValueChange={props.inputValueChange}
                    modalBackDropClose={props.modalBackDropClose}
                    placeOrder={props.placeOrder}
                    inputChecked={props.inputChecked}
                />
            </div>
        </Aux>
    );
}

export default modal;
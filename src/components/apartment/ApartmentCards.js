import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import data from '../../data/ApartmentData';
import Classes from './apartment.module.css';
import PropertyOverlay from './preview/propertyOverlay';

const ApartmentCard = ({ show }, props) => {
    const [overlay, doShowOverlay] = useState();

    const data = useSelector(state =>  state.property);

    const toogleOverlayHandler = (item) => doShowOverlay(item);
    const closeModal = () => doShowOverlay();

    const options = data.map((item, index) => {
        if (index < 4) {
            return (
                <div key={index} onClick={() => toogleOverlayHandler(item)} className={Classes.card}>
                    <div className={Classes["card-gallery"]}>
                        <img src={item.image} className={Classes['card-image']} alt="house"></img>
                    </div>
                    <div className={Classes['card-details']}>
                        <div className={`${Classes['apartment-details__info']}`}>
                            <h3 className={`heading-tertiary `}> {item.location}, Lagos</h3>
                            <h3 className={`heading-tertiary__light `}> </h3>
                        </div>
                    </div>
                </div>
            )
        } else { return null; }
    });
    return (
        <div className={`grid  ${Classes["apartment-container"]}`}>
            {options}
            {overlay && <PropertyOverlay onShow={overlay} onClick={closeModal} />}
        </div>)
}
export default ApartmentCard;
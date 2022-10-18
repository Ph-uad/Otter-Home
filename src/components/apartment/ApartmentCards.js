import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import data from '../../data/ApartmentData';
import Classes from './apartment.module.css';
import SVG from '../UI/Svg/Svg';
import PropertyOverlay from './preview/propertyOverlay';

const ApartmentCard = ({ show }, props) => {
    const [overlay, doShowOverlay] = useState();

    const data = useSelector(state => state.property);

    // const toogleOverlayHandler = (item) => doShowOverlay(item);
    // const closeModal = () => doShowOverlay();

    const options = data.map((item, index) => {
        if (index < 3) {
            return (
                <div key={index} className='flex'>
                {/* <div key={index} onClick={() => toogleOverlayHandler(item)} className={`${Classes} flex `}> */}
                    <div className={Classes["card-gallery"]}>
                        <img src={item.image} className={Classes['card-image']} alt="house"></img>
                    </div>
                    <div className={Classes['card-details']}>
                        <h2 className='heading--secondary bolder'>Your Plan To Build A Home</h2>
                        <p className='paragraph'>
                            Maintainable and sustainable properties that are
                            structured to host a family still cozy. In nice neighbourhood
                            strategically placed within range of utility stores, schools,
                            leisure parks and some other fun things the city has in store.
                        </p>
                    </div>
                </div>
            )
        } else { return null; }
    });
    return (
        <div className={`  ${Classes["apartment-container"]}`}>
            {options}
            {/* {overlay && <PropertyOverlay onShow={overlay} onClick={closeModal} />} */}
        </div>)
}
export default ApartmentCard;
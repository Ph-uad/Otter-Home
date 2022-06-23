import React from 'react';
import Modal from '../../UI/overlayModal/Modal'
import Classes from './apartmentInfo.module.css'
import SVG from '../../UI/Svg/Svg';
import Buttons from '../../UI/Button/Button';


const PropertyOverlay = (props) => {

    let data = props.onShow

    console.table(data)
    return (
        <Modal onClick={props.onClick}>
            <div className={`${Classes["apartment-container"]}`}>
                <picture className={Classes["apartment-box"]}>
                    <img className={Classes["apartment-image"]} src={data.image} alt="apartment"></img>
                </picture>

                <div className={`flex-column ${Classes["apartment-details"]}`}>
                    <span>
                        <h4 className={`heading-quadruple  ${Classes["apartment-state"]}`}>Lagos State</h4>
                        <h4 className="heading-quadruple heading-intro">{data.town} </h4>
                        <h2 className="heading-secondary"> {data.location}, Nigeria</h2>
                    </span>

                    <h2 className="heading-secondary"> {data.price}</h2>
                    <p className="paragraph">{data.description}</p>

                    <div className="property-details  p-1">
                        <SVG urlId="" value="1600 Sqr Ft" />
                        <SVG urlId="#icon-bed" value="2" />
                        <SVG urlId="#icon-bath" value="1" />
                        <SVG urlId="#icon-automobile" value="2" />
                    </div>

                    <Buttons>Add to List</Buttons>
                </div>
            </div>
        </Modal >
    )

}
export default PropertyOverlay;
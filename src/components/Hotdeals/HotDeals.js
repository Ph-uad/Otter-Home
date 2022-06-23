import React from 'react';
import SVG from '../UI/Svg/Svg';
import Classes from './hotDeals.module.css'



const HotDeals = () => {
    return (
        <>
            <h4 className="heading-quadruple heading-intro">on this week</h4>
            <h2 className="heading-secondary"><span className='bolder'> Hot</span> Deal </h2>

            <div className={`flex center ${Classes.hot}`}>
                <div className={Classes.poster}></div>
                <div className={`flex-column ${Classes["hot-details"]}`}>
                    <h4 className="heading-quadruple heading-intro">Aesthetic Pleasing Environment on the mainland for rent </h4>
                    <h2 className="heading-secondary"> 16 Apartments 3 rooms grade B</h2>
                    <h4 className="heading-quadruple heading-intro">Sonibare estate Maryland </h4>
                    <div className="property-details hot-details p-1">
                        <SVG urlId="" value="1600 Sqr Ft" />
                        <SVG urlId="#icon-bed" value="2" />
                        <SVG urlId="#icon-bath" value="1" />
                        <SVG urlId="#icon-automobile" value="2" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotDeals;
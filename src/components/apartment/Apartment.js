import React from 'react';
import ApartmentCard from './ApartmentCards';

const Apartment = () => {
    return (
        <section>
            <h4 className="heading-quadruple">best deals</h4>
            <h2 className=" heading-secondary bolder">Your Plan </h2>
            <ApartmentCard/>         
        </section>
    )
}
export default Apartment;

import React from 'react';
import ApartmentCard from './ApartmentCards';

const Apartment = () => {
    return (
        <section>
            <h4 className="heading-quadruple">Otter Agency</h4>
            <h2 className=" heading-secondary"><span className="bolder">Feautured</span> Properties.</h2>
            <ApartmentCard/>         
        </section>
    )
}
export default Apartment;

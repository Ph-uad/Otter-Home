import React from 'react';
import Classes from './footer.module.css';
import Testimonials from './testimonial/testimonial';

const Footer = () =>{

    return(
        <div className={Classes["footer"]}>
            <Testimonials />
            <span className={Classes["footer-copyright"]}>
                626 designs All Rights Reserved
            </span>
        </div>
    )
    
}
export default Footer
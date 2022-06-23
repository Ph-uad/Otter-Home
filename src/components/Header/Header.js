// import React,{useEffect, useRef} from 'react';
// import ScrollTrigger from 'gsap/ScrollTrigger';
import Button from '../UI/Button/Button'
import Classes from './header.module.css';
// import gsap from 'gsap';

const Header = (props) => {

    
    return (
        <header className={`flex text-white ${Classes["header"]}`}>
            <div className={Classes["header-text"]} >
                <h1 className="heading-jumbo">Otter's Homes</h1>
                <h3 className="heading-tertiary">stay close heaven</h3>
                <Button className={Classes.button}><a href="#apartment" className="link">Take a Tour</a> </Button>
            </div>
        </header>
    );
};
export default Header;
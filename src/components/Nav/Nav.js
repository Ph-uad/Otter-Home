import React, {useRef, useEffect} from 'react';
// import CartIcon from './cartIcon/cartIcon';
import Classes from './nav.module.css';


function Nav() {

     
    let nav = useRef();

    useEffect(()=>{
        // gsap.registerPlugin(ScrollTrigger)
        // gsap.to(nav, {
        //     scrollTrigger:{trigger : nav ,start: "top top",toggleActions: "restart pause reverse pause",scrub: 1,},
        //     markers: true,
        //     duration: 5
        return
        },[]);

    return (
        <nav ref={nav} className={`${Classes['navigation']} flex`}>
            <span className={Classes.logo}>🦦</span>
            <ul className={` ${Classes['list']} flex`}>
                <li className={` ${Classes['list-item']}`}><a className={` ${Classes['list-link']}`} href='####'>Apartments</a></li>
                <li className={` ${Classes['list-item']}`}><a className={` ${Classes['list-link']}`} href='####'>About us</a></li>
                <li className={` ${Classes['list-item']}`}><a className={` ${Classes['list-link']}`} href='####'>Locations</a></li>
                <li className={` ${Classes['list-item']}`}><a className={` ${Classes['list-link']}`} href='####'>My list</a></li>
            </ul>
            {/* <CartIcon></CartIcon> */}
        </nav>
    );
}

export default Nav;
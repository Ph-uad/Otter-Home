
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Search from '../../utility/search';
import Classes from './nav.module.css';


function Nav() {

    const content = useSelector(state => state.property.list)
    const [searchResult, setSeaarchResult] = useState([])

    console.log(searchResult);

    return (
        <nav className={ `${Classes['nav']} flex width--max` }>
            <span className={ Classes.logo }>
                <Link className={ `link heading--secondary`} to="/home">🦦</Link>
            </span>
            <ul className={`${Classes['list']} flex` }>
                <li className={ ` ${Classes['list-link']}` }>
                    <NavLink className={({ isActive }) => (isActive ? 'current' : null)}  to='/listing'>Listing</NavLink>
                </li>
                <li className={ ` ${Classes['list-link']}` }>
                    <NavLink className={({ isActive }) => (isActive ?  'current'  : null)}  to='/about'>About us</NavLink>
                </li>
                <li className={ ` ${Classes['list-link']}` }>
                    <NavLink className={({ isActive }) => (isActive ?  'current'  : null)}  to='/contact'>contact</NavLink>
                </li>
            </ul>
            
            <span>
               <Search content={content} setSearchText={setSeaarchResult} />
            </span>
        </nav>
    );

}

export default Nav;
import { Link, NavLink } from 'react-router-dom';
import Classes from './nav.module.css';

function Nav() {

    return (
        <nav className={ `${Classes['nav']} flex width--max` }>
            <span className={ Classes.logo }>
                <Link className={ `link heading--secondary` } to="/">🦦</Link>
            </span>
            <ul className={ `${Classes['list']} flex` }>
                <li className={ ` ${Classes['list-link']}` }>
                    <NavLink className={ ({ isActive }) => (isActive ? 'current' : null) } to='/listing'>Listing</NavLink>
                </li>
                <li className={ ` ${Classes['list-link']}` }>
                    <NavLink className={ ({ isActive }) => (isActive ? 'current' : null) } to='/about'>About us</NavLink>
                </li>
                <li className={ ` ${Classes['list-link']}` }>
                    <NavLink className={ ({ isActive }) => (isActive ? 'current' : null) } to='/contact'>contact</NavLink>
                </li>
            </ul>

        </nav>
    );

}

export default Nav;
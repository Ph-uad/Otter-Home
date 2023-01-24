import { Link, NavLink } from 'react-router-dom';
import Classes from './nav.module.css';
import HomeSVG from '../../../Assets/svg/sprite.svg'
import SVG from '../UI/Svg/Svg';

function Nav() {

    return (
        <nav className={ `${Classes['nav']} flex width--max` }>
            <span className={ Classes.logo }>
                <Link className={ `link heading--secondary` } to="/">🦦</Link>
            </span>
            <ul className={ `${Classes['list']} flex` }>
                <li className={ `flex ${Classes['list-link']}` }>
                    <NavLink className={ ({ isActive }) => (isActive ? 'current flex' : 'flex') } to='/'><SVG urlId="#icon-home"/> <span>Home </span> </NavLink>
                </li>
                <li className={ `flex ${Classes['list-link']}` }>
                    <NavLink className={ ({ isActive }) => (isActive ? 'current flex' : 'flex') } to='/listing'><SVG urlId="#icon-building"/> <span>Listing </span></NavLink>
                </li>
                <li className={ `flex ${Classes['list-link']}` }>
                    <NavLink className={ ({ isActive }) => (isActive ? 'current flex' : 'flex') } to='/about'><SVG urlId="#icon-info"/><span> About us</span></NavLink>
                </li>
            </ul>

        </nav>
    );

}

export default Nav;
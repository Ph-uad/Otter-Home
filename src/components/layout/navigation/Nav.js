import { Link, NavLink } from 'react-router-dom';
import Classes from './nav.module.css';
import SVG from '../utils/Svg/Svg';

function Nav() {

    return (
        <nav className={ `${Classes['nav']}  width--max` }>
            <div className={`container flex ${Classes['container']}`}>
                <span className={ Classes.logo }>
                    <Link className={ `link` } to="/">🦦 ohms</Link>
                </span>
                <ul className={ `${Classes['list']} flex` }>
                    <li className={ `flex ${Classes['list-link']}` }>
                        <NavLink className={ ({ isActive }) => (isActive ? `${Classes.current} flex` : 'flex') } to='/'><SVG urlId="#icon-home" /> <span>Home </span> </NavLink>
                    </li>
                    <li className={ `flex ${Classes['list-link']}` }>
                        <NavLink className={ ({ isActive }) => (isActive ? `${Classes.current} flex` : 'flex') } to='/listing'><SVG urlId="#icon-building" /> <span>Listing </span></NavLink>
                    </li>
                    <li className={ `flex ${Classes['list-link']}` }>
                        <NavLink className={ ({ isActive }) => (isActive ? `${Classes.current} flex` : 'flex') } to='/about'><SVG urlId="#icon-info" /><span> About us</span></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );

}

export default Nav;
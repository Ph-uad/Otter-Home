
import Classes from './nav.module.css';


function Nav() {
    return (
        <nav className={`${Classes['nav']} flex`}>
            <span className={Classes.logo}>🦦</span>
            <ul className={` ${Classes['list']} flex`}>
                <li className={` ${Classes['list-item']}`}><a className={` ${Classes['list-link']}`} href='####'>Apartments</a></li>
                <li className={` ${Classes['list-item']}`}><a className={` ${Classes['list-link']}`} href='####'>About us</a></li>
                <li className={` ${Classes['list-item']}`}><a className={` ${Classes['list-link']}`} href='####'>Locations</a></li>
                <li className={` ${Classes['list-item']}`}><a className={` ${Classes['list-link']}`} href='####'>My list</a></li>
            </ul>
        </nav>
    );

}

export default Nav;
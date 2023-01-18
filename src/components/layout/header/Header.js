
import Classes from './header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={ `flex--column  text-white ${Classes["header"]}` }>
            <div className={ `width--mid container` }>
                <div className={ Classes["header--text"] } >
                    <p className="paragraph text--white">Welcome to paradise nest</p>
                    <h1 className="heading--jumbo">Otter’s Estate </h1>
                    <p className="paragraph text--white">
                        Welcome to Otter's Home, a place that put you in a habitual state of relaxation. By priotizing a safe natural environment,
                        better and safe utilities for a better eco-friendly lifestyle
                    </p>
                    <Link to='/listing' className='link'>
                        <button className='btn btn--primary'>Listing</button>
                    </Link>
                </div>
            </div>
        </header>
    );
};
export default Header;
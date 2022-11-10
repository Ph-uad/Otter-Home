
import Classes from './header.module.css';

const Header = (props) => {

    return (
        <header className={`flex--column  text-white ${Classes["header"]}`}>
            <div className={Classes['header__container']}>
                <div className={Classes["header-text"]} >
                    <h1 className="heading-jumbo">Otter’s Estate </h1>
                    <h3 className="heading-tertiary">pick your paradise</h3>
                    <button className='btn btn--primary'>Listing</button>
                </div>
            </div>
        </header>
    );
};
export default Header;
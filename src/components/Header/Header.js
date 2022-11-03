
import Classes from './header.module.css';
import OptionBox from '../ui/optionBox/optionBox';
import Loft from '../../assets/img/loft.jpg';
import Complex from '../../assets/img/complex.jpg';
import Residential from '../../assets/img/residential.jpg';
import Commercial from '../../assets/img/commercial.jpg';

const Header = (props) => {

    return (
        <header className={`flex--column  text-white ${Classes["header"]}`}>
            <div className={Classes['header__container']}>
                <div className={Classes["header-text"]} >
                    <h1 className="heading-jumbo">Otter’s Home </h1>
                    <h3 className="heading-tertiary">pick your paradise</h3>
                </div>


                <div className={`flex ${Classes['header__option']}`}>
                    <OptionBox pic={Complex} label={"Apartment"} />
                    <OptionBox pic={Loft} label={"Loft"} />
                    <OptionBox pic={Residential} label={"Residential"} />
                    <OptionBox pic={Commercial} label={"Commercial"} />
                </div>
            </div>



        </header>
    );
};
export default Header;
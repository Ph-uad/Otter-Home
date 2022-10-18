
import Classes from './header.module.css';
import OptionBox from '../optionBox/optionBox';
import Loft from '../../Assets/img/loft.jpg';
import Natural from '../../Assets/img/natural.jpg';
import Complex from '../../Assets/img/complex.jpg';
import Residential from '../../Assets/img/Residential.jpg';

const Header = (props) => {

    return (
        <header className={`flex  text-white ${Classes["header"]}`}>
            <div className={Classes['header__container']}>
                <div className={Classes["header-text"]} >
                    <h1 className="heading-jumbo">Otter’s Home </h1>
                    <h3 className="heading-tertiary">pick your paradise</h3>
                </div>


                <div className={`flex ${Classes['header__option']}`}>
                    <OptionBox pic={Complex} label={"Apartment"} />
                    <OptionBox pic={Loft} label={"Loft"} />
                    <OptionBox pic={Residential} label={"Residential"} />
                    <OptionBox pic={Natural} label={"Natural"} />
                </div>
            </div>



        </header>
    );
};
export default Header;
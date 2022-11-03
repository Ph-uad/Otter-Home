import { Link } from 'react-router-dom';
import Classes from './optionBox.module.css'


const OptionBox = (props) => {
    return (
        <Link to="/listing" className='link'>
            <div className={Classes.box}>
                <figure className={Classes.figure}>
                    <img className={Classes.img} src={props.pic} alt="property-types" />
                    <label className={Classes.label}>{props.label}</label>
                </figure>
            </div>
        </Link>
    );
}

export default OptionBox;
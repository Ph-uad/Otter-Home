import Classes from './optionBox.module.css'


const OptionBox = (props) => {
    return (
        <>
            <div className={Classes.box}>
                <figure className={Classes.figure}>
                    <img className={Classes.img} src={props.pic} alt="property-types" />
                    <label className={Classes.label}>{props.label}</label>
                </figure>
            </div>
        </>
    );
}

export default OptionBox;
import Classes from './support.module.css'
import MailSVG from '../../../Assets/svg/email.svg'
import { useFormik } from "formik";



const Support = () => {

    const validate = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = "Required";
            console.log(errors)
            return errors;
        }
        if (!values.lastName) {
            errors.lastName = "Required";
            return errors;
        }
        if (!values.message) {
            errors.message = "Required";
            return errors;
        }
    }

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        // values, // use this if you want controlled components
        errors,
    } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            message: "",
        },
        validate,
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
            // values = {"favoriteFood":"ramen","favoritePlace":"mountains"}
        },
    });


    return (
        <div className={ `page flex ${Classes.support}` }>
            <div className={ `flex ${Classes.container}` }>
                <figure className={`figure flex ${Classes.figure}`}>
                    <img src={MailSVG} alt="mail-icon" />
                </figure>
                <form onSubmit={ handleSubmit } className={`${Classes.form}`}>

                    <div className={ Classes["form__control"] }>
                        <input name="firstName" placeholder='First Name' className={ Classes["form__input"] } type="text" id="firstName" onChange={ handleChange } onBlur={ handleBlur } />

                        { touched.firstName && errors.firstName ? <div className='alert--error'>{ errors.firstName }</div> : null }
                    </div>

                    <div className={ Classes["form__control"] }>
                        <input name="lastName" placeholder='Last Name' className={ Classes["form__input"] } type="mail" id="lastName" onChange={ handleChange } onBlur={ handleBlur } />
                        { touched.lastName && errors.lastName ? <div className='alert--error'>{ errors.lastName }</div> : null }
                    </div>

                    <div className={ Classes["form__control"] }>
                        <textarea name="message" placeholder='Message' className={ Classes["form__input"] } type="text"  id="message" onChange={ handleChange } onBlur={ handleBlur } />
                        { touched.message && errors.message ? <div className='alert--error'>{ errors.message }</div> : null }
                    </div>

                    {/* <div className={ Classes["form__control"] }>
                    <input placeholder='Phone' className={ Classes["form__input"] } type="text" name="phone" id="phone" />
                    <label className={ Classes["form__label"] } htmlFor="phone" >Phone:</label>
                </div> */}

                    <button type="submit" className='btn btn--primary'>Submit</button>
                </form>
            </div>


        </div>
    )
}
export default Support;
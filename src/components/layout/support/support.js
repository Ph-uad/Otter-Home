import Classes from './support.module.css'
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
        },
        validate,
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
            // values = {"favoriteFood":"ramen","favoritePlace":"mountains"}
        },
    });


    return (
        <div className={ `page flex ${Classes.support}` }>
            <form onSubmit={ handleSubmit }>

                <div className={ Classes["form__control"] }>
                    <input name="firstName" placeholder='Surname' className={ Classes["form__input"] } type="text" id="firstName" onChange={ handleChange } onBlur={ handleBlur }  />
                    
                    { touched.firstName && errors.firstName ? <div>{errors.firstName}</div> : null } 
                </div>

                <div className={ Classes["form__control"] }>
                    <input name="lastName" placeholder='Email' className={ Classes["form__input"] } type="mail" id="lastName" onChange={ handleChange } onBlur={ handleBlur }  />
                    { touched.lastName && errors.lastName ? <div>{errors.lastName}</div> : null }
                </div>

                {/* <div className={ Classes["form__control"] }>
                    <input placeholder='Phone' className={ Classes["form__input"] } type="text" name="phone" id="phone" />
                    <label className={ Classes["form__label"] } htmlFor="phone" >Phone:</label>
                </div> */}

                <button type="submit" className='btn btn--primary'>Submit</button>
            </form>
        </div>
    )
}
export default Support;
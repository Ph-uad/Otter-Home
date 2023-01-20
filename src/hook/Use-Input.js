import { useState } from "react";
import { SetIn } from "final-form";
import { Form, Field } from "react-final-form";
import * as Yup from 'yup';


const UseInput = (validate) =>{

    const schema = Yup.object({
        favoriteFood: Yup.string().required("Required"),
      });
      
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validate(enteredValue);
    const hasError = !valueIsValid && isTouched;


    const valueChangedHandler = (e) =>{
        setEnteredValue(e.target.value);
    }

    const onBlurHandler = e =>{
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('');
        isTouched(false)
    }

    return{
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangedHandler,
        onBlurHandler,
    }

}
export default UseInput;
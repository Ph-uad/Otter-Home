import { useState } from "react";


const UseInput = (validate) =>{
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
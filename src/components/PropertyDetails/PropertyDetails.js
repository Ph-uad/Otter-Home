import { useDispatch, useSelector } from "react-redux";
import propActions from '../../data/ApartmentData'

const PropertyDetails = (props) => {

    const data = useSelector(s=> s.property);
    console.log(data)

    const dispatch = useDispatch();
    console.log(dispatch(propActions))

    // dispatch.propertyCheck();

    return (
        <>
            <h1>Welcome </h1>
            <h1>Welcome </h1>
            <h1>Welcome </h1>
            <h1>Welcome </h1>
        </>
    )
}
export default PropertyDetails;
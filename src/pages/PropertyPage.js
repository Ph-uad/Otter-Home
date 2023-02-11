import React from 'react'
import { useParams } from 'react-router-dom'
import PropertyDetails from '../components/layout/propertyDetails/PropertyDetails'

const PropertyPage = () => {

    const params =useParams()
    console.log(params)

  return (
    <PropertyDetails />
  )
}

export default PropertyPage

export function loader({params}){
    const data = params;
    console.log(data);
    return data;
}
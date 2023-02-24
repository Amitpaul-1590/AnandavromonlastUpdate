import React from 'react'
import {IndividualPlace} from './IndividualPlace'

export const Places = ({products}) => {
    
    return products.map((individualProduct)=>(
        <IndividualPlace 
            key = {individualProduct.ID} 
            individualProduct= {individualProduct}
        />
    ))
}

export default Places;
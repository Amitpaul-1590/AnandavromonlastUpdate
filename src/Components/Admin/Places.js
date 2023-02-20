import React from 'react'
import {IndividualProduct} from './IndividualPlace'

export const Products = ({products}) => {
    
    return products.map((individualProduct)=>(
        <IndividualProduct 
            key = {individualProduct.ID} 
            individualProduct= {individualProduct}
        />
    ))
}

export default Products;
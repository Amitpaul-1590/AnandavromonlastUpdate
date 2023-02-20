//user
import React from 'react'
import {useNavigate} from 'react-router-dom'

export const IndividualFilteredProduct = ({individualFilteredProduct}) => {
    const sheet_link = individualFilteredProduct.sheet_link;
    const web_link   = individualFilteredProduct.web_link;
    const map_link   = individualFilteredProduct.map_link;
    const navigate = useNavigate(); 

    const view_cost=()=>{
          navigate('/Information' );
    }

    return (
        <div className='product' style={{backgroundColor:'skyblue',  width:"250px",height:"350px"}}>
            <div  className='product-img'>
            <h1 className='photoCard'><a style={{}} href={individualFilteredProduct.map_link}><img style={{borderRadius:"10px",boxShadow:"5px",margin:"0px"}} src={individualFilteredProduct.url} alt="product-img"/>  </a></h1>            </div>
            <h1  className='cardTitle'><a style={{textDecoration: 'none' ,color:"white",fontSize:"15px", fontWeight:"bold"}} href={individualFilteredProduct.web_link}>{individualFilteredProduct.title}  </a></h1>            
            <div style={{color:"blue"}} className='product-text description'>{individualFilteredProduct.description}</div>
            <div  className='btn btn-danger btn-sm cart-btn' onClick={view_cost}>View cost </div>           
        </div> 
    )
}

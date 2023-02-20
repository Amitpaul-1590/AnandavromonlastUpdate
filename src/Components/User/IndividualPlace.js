//user
import {fs} from '../../Config/Config'
import {db} from '../../Config/Config';
import React from 'react'
import {useNavigate} from 'react-router-dom'
 // https://firebase.google.com/docs/firestore/manage-data/delete-data#web-version-8
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

//https://console.firebase.google.com/u/0/project/project-716fb/firestore/data/~2FProducts~2F0niOg7PevkU3juJF0Gex
export const IndividualProduct = ({individualProduct}) => {
    const sheet_link = individualProduct.sheet_link;
    const web_link   = individualProduct.web_link;
    const map_link   = individualProduct.map_link;
    const navigate = useNavigate(); 

    const url = individualProduct.sheet_link; 
  
    const view_cost=()=>{
          navigate(
            '/Information' ,
            {state :
              {sheet_link : individualProduct.sheet_link }
            }
            
          );
    }

    const handleCartProductDelete=()=>{        
            console.log(individualProduct.ID);
            
              const deleteUser = async (id) => {
              const userDoc = doc(db, "Products", id);
              await deleteDoc(userDoc);
              };         
        
    }
      
      const deleteUser = async (id) => {
    const userDoc = doc(db, "Products", id);
    await deleteDoc(userDoc);
  };

    return (
      <div className='product' style={{backgroundColor:'skyblue',  width:"250px",height:"350px"}}>
      <div  className='product-img'>
      <h4 className='photoCard'><a style={{}} href={individualProduct.map_link}><img style={{borderRadius:"10px",boxShadow:"5px",margin:"0px"}} src={individualProduct.url} alt="product-img"/>  </a></h4>
      </div>
      <h1  className='cardTitle'><a style={{textDecoration: 'none' ,color:"white",fontSize:"15px", fontWeight:"bold"}} href={individualProduct.web_link}>{individualProduct.title}  </a></h1>
      <div style={{color:"blue"}} className='product-text description'>{individualProduct.description}</div>
      <div  className='btn btn-danger btn-sm cart-btn' onClick={view_cost}>View cost </div>
  </div> 
    )
}
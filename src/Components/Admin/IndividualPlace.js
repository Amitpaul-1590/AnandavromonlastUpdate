import React from 'react'
import {useNavigate} from 'react-router-dom'
import {fs} from '../../Config/Config'
import {db} from '../../Config/Config'; // https://firebase.google.com/docs/firestore/manage-data/delete-data#web-version-8
import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditForm from './EditForm';
import Card from 'react-bootstrap/Card';  

//https://console.firebase.google.com/u/0/project/project-716fb/firestore/data/~2FProducts~2F0niOg7PevkU3juJF0Gex
export const IndividualPlace = ({individualProduct}) => {
//modal

  const [show, setShow] = useState(false);
  const [formid, setFormid] = useState([]);  //""
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//modal



    const sheet_link = individualProduct.sheet_link;
    const web_link   = individualProduct.web_link;
    const map_link   = individualProduct.map_link;
    const navigate = useNavigate(); 

    const view_cost=()=>{
          navigate(
            '/Information' ,
            {state :
              {sheet_link : individualProduct.sheet_link }
            }
            
          );
    }

    const deletePlace = async (id) => {
      const userDoc = doc(db, "Places", id);
      await deleteDoc(userDoc);
    };

    const updatePlaces = async (id) => {
      // const userDoc = doc(db, "Places", id);
      // await deleteDoc(userDoc);
    };

    const editData = (id, title, description, category, web_link, sheet_link, map_link, information1, img) => {
      const data = {
        id: id,
        title: title,
        description: description,
        category: category,
        web_link: web_link,
        sheet_link: sheet_link,
        map_link: map_link,
        information1: information1,
        img: img
      };
      setFormid(data);
      handleShow();
    }

    return (
            <div style={{margin:"10px", backgroundColor:"red", boxShadow: "inherit"}}>   
              <Card style={{ width: '18rem' }}>      
               <a href={individualProduct.map_link}><Card.Img variant="top" src={individualProduct.url} alt="product-img" />  </a>
               <Card.Body>
                <a style={{textDecoration: "none"}} href={individualProduct.web_link}> <Card.Title >{individualProduct.title}</Card.Title></a>
                <a style={{textDecoration: "none"}} href={individualProduct.information1}>Sheet</a>
                <Card.Text>{individualProduct.description}</Card.Text>

                {/* buttons */}
                <div>
                  <Button 
                    onClick={() => {
                      deletePlace(individualProduct.ID);
                    }}
                  >{" "}
                    Delt
                  </Button>
                <div style={{marginLeft: "5px", marginRight: "5px"}} className='btn btn-danger btn-md cart-btn' onClick={view_cost}>View cost </div>
                  <Button 
                  variant="primary" 
                  onClick={() => {
                    editData(
                      individualProduct.ID, 
                      individualProduct.title,
                      individualProduct.description,
                      individualProduct.category,
                      individualProduct.web_link,
                      individualProduct.sheet_link,
                      individualProduct.map_link,
                      individualProduct.information1,
                      individualProduct.img
                    );
                  }}>
                    edit
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <EditForm closeEvent={handleClose} fid={formid} name="amit" />
                  </Modal>  
                </div>
               </Card.Body>
              </Card>
            </div> 
             
        
    )
   }      


      
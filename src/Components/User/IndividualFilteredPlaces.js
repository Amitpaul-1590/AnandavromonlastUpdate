//user
import React from 'react'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const IndividualFilteredPlace = ({individualFilteredProduct}) => {
    const sheet_link = individualFilteredProduct.sheet_link;
    const web_link   = individualFilteredProduct.web_link;
    const map_link   = individualFilteredProduct.map_link;
    const navigate = useNavigate(); 

    const view_cost=()=>{
          navigate('/Information' );
    }

    return (
      <div style={{margin:"10px"}}>
      <Card style={{ width: '18rem' }}>      
       <a href={individualFilteredProduct.map_link}><Card.Img variant="top" src={individualFilteredProduct.url} alt="product-img" />  </a>
       <Card.Body>
       <a style={{textDecoration: "none"}} href={individualFilteredProduct.web_link}> <Card.Title >{individualFilteredProduct.title}</Card.Title></a>
        <Card.Text>{individualFilteredProduct.description}</Card.Text>
        <Button variant="primary" onClick={view_cost}>View cost </Button>
      </Card.Body>
      </Card>
      </div>  
    )
}

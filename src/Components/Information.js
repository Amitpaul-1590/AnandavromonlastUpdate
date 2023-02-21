import { useNavigate } from 'react-router-dom';
import { IndividualProduct } from './Admin/IndividualPlace';
import Modal from 'react-bootstrap/Modal';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table';
import Street from './Street';


const Information = () => {
  const [person, setPerson]=useState(0);
  const [day, setDay]=useState(0);
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);

  // modal

  const [show, setShow] = useState(false);
  const [formid, setFormid] = useState([]);  //""
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

      const description = (roni) => {
      const data = {
        roni: roni,
      };
      setFormid(data);
      handleShow();
    }


  // modal

  const location = useLocation();

  const amit = (open, button_index) => {
      console.log(open);
      console.log(button_index);
      
        setOpen(!open);
        
  }

  const getData = async () => {
    try {
      const res = await fetch(
        location.state.sheet_link
        //  "https://sheet.best/api/sheets/4a4681c3-0c66-42c7-9049-1b8eb33c5ee2"
      );  
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };
      const navigate = useNavigate(); 

      const hotel_cost=()=>{
          navigate(
            "/Hotel_Info" ,
            {state :
              {sheet_link : location.state.sheet_link }
            }
            
          );
    }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{backgroundColor:'white', padding: "40px"}}>
      person:
     <input type="number" id="person" className='form-control' required
     onChange={(e)=>setPerson(e.target.value)} value={person}></input>

     <br></br>
     <br></br>
     <br></br>
     <h2 style={{color:"white",fontWeight:"bold",textShadow:"inherit",textAlign:"center",border:"2px solid red",borderRadius:"10px",backgroundColor:"ButtonText"}}>Transport Information </h2>

     <br></br>
     <br></br>


      {data?.map((item, i) => (
        <div id={`heading${i}`} key={i} >
          <br/>                                     
        <Button
        style={{backgrondColor:"white"}}
        id={`roni${i}`}
        onClick={() => amit(open, i)}
        aria-controls="example-collapse-text"
        // style={{backgroundColor:"red",alignItems:"center"}}
        aria-expanded={open}
        >
        {item.Place} 
      </Button>
      <Collapse  in={open}>
          
      <div style={{margin:"10px"}}>
      <Card style={{ width: '18rem' }}>      
       {/* <a href={individualFilteredProduct.map_link}><Card.Img variant="top" src={individualFilteredProduct.url} alt="product-img" />  </a> */}
       <Card.Body>
        <Card.Title >{item.Heading}</Card.Title>
        <Card.Text>
              {/* <p>Bus price   : {item.Bus}  <br></br> total: {item.Bus*person*2} </p>                 
              <p style={{marginLeft: "30px"}}><a style={{textDecoration: "none"}} href={item.information1}>map</a> </p>
              <p>Train price :{item.Train} <br></br> total: {item.Train*person*2}</p>  
              <p style={{marginLeft: "30px"}}><a style={{textDecoration: "none"}} href={item.information1}>map</a> </p> */}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Info</th>
          <th>Bus</th>
          <th>Train</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>price</td>
          <td>{item.Bus}</td>
          <td>{item.Train}</td>
        </tr>
        <tr>
          <td>total</td>
          <td>{item.Bus*person*2}</td>
          <td>{item.Train*person*2}</td>
        </tr>
        <tr>
          <td>Map</td>
          <td><a href='https://goo.gl/maps/qFw1KJmUurn5jZmC9'></a></td>
          <td>{item.Train*person*2}</td>
        </tr>
        <tr>
          <td>desp</td>
          <td><Button 
                  variant="primary" 
                  onClick={() => {
                    description(
                      item.Bus
                    );
                  }}>
                    Go
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Street closeEvent={handleClose} fid={formid} />
                  </Modal></td>
          <td><Button>Go</Button></td>
        </tr>
        {/* <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>

    </Table>
     <Button variant="primary" style={{width: "100%"}} onClick={hotel_cost}>Hotel cost </Button>

        </Card.Text>
        {/* <Button variant="primary" onClick={view_cost}>View cost </Button> */}
      </Card.Body>
      </Card>
      </div> 
      </Collapse>
         
        </div>
      ))}

    </div>
  );
};

export default Information;
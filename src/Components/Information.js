import { useNavigate } from 'react-router-dom';
import { IndividualProduct } from './Admin/IndividualPlace';

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Information = () => {
  const [person, setPerson]=useState(0);
  const [day, setDay]=useState(0);
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);

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
      console.log(data);
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{backgroundColor:'white', padding: "40px"}}>



      person:
     <input type="number" id="person" className='form-control' required
     onChange={(e)=>setPerson(e.target.value)} value={person}></input>
     <br></br>
     Day   : 
     <input type="number" id="day" className='form-control' required
     onChange={(e)=>setDay(e.target.value)} value={day}></input>
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
        id={`roni${i}`}
        onClick={() => amit(open, i)}
        aria-controls="example-collapse-text"
        // style={{backgroundColor:"red",alignItems:"center"}}
        aria-expanded={open}
        >
        {item.Place} 
      </Button>
      <Collapse  in={open}>
            <div> <br/>
              <div>
                <span>
                  <strong className="display-6">{item.Heading} </strong> ---{" "}
                </span>
              </div><br></br>
              <p>Bus price   : {item.Bus}  <br></br> total: {item.Bus*person*2}  </p>    
              <p>Train price :{item.Train} <br></br> total: {item.Train*person*2}</p>
              
            </div>
      </Collapse>
          {/* <h2 style={{fontWeight:"bold"}}className="accordion-header" id={`heading${i}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${i}`}
              aria-expanded="true"
              aria-controls={`collapse${i}`}
            >
              {item.Place}  
            </button>
          </h2>
          <div
            id={`collapse${i}`}
            aria-labelledby={`heading${i}`}
            data-bs-parent="#accordionExample"
          >
            <div>
              <div>
                <span>
                  <strong className="display-6">{item.Heading} </strong> ---{" "}
                </span>
              </div><br></br>
              <p>Bus price   : {item.Bus}  <br></br> total: {item.Bus*person*2}  </p>    
              <p>Train price :{item.Train} <br></br> total: {item.Train*person*2}</p>
            </div>
          </div> */}
        </div>
      ))}

    {/* hotel */}
    <hr></hr>
    <h1 style={{color:"white",fontWeight:"bold",textShadow:"inherit",textAlign:"center",border:"2px solid red",borderRadius:"10px",backgroundColor:"ButtonText"}}>hotels information</h1>
    <hr></hr>
    <br></br>
      {data?.map((item, i) => (
        <div style={{backgroundColor:"skyblue",borderRadius:"10px", paddingTop:"10px",paddingLeft:"20px"}} key={i}>
          <h2 id={`heading${i}`}>            
              <a style={{textDecoration: "none"}} href={item.link}>{item.hotel}  </a>
          </h2>
          
            <div >
              <div >
                <span>
                  <strong className="display-6">{item.heading2} </strong> 
                </span>
              </div><br></br>
              <p>rent price maximum : {item.maximum_rent} <br></br>  total: {item.maximum_rent*person*day}</p>    
              <p>rent price minimum : {item.minimum_rent}  <br></br> total: {item.minimum_rent*person*day}</p>
              
            </div>
          </div>
      ))}

    </div>
  );
};

export default Information;
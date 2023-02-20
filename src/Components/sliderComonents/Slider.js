import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";
import {useNavigate} from "react-router-dom"



const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const navigate = useNavigate();

  return (
    <div className="slider-container">
<button style={{marginLeft:"35%", border:"none",borderRadius:"5px",color:"white",backgroundColor:"tomato",padding:"8px",fontWeight:"bold"}} onClick={()=>navigate("/home")}>Go to explore</button>  
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
     
      <div className="one">
      <h2 className="vromon"><strong>AnandaVromon:</strong></h2>
      <hr></hr>
      <h2 style={{color:"tomato", fontWeight:"bold"}}>Welcome to the Ananda Vromon.</h2>
      <p class="article">Ananda Vromon is a one kind of app that will make your journey plane more standard </p>

      <br></br>
      <hr></hr>

      <h2 className="vromon"><strong>Why Use it:</strong></h2>
      <hr></hr>
      <p class="article">* Category wise place selection </p>
      <p class="article">* Can plan your budget as the number of person</p>
      <p class="article">* can see the transportation cost from anywhere</p>
      <p class="article">* can see the hotel cost and many others fasciitis you can get</p>
      
      </div>
    </div>

    
  );

  
  
}

export default Slider;

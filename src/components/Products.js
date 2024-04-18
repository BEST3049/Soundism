import React, { useEffect,useState } from 'react';
import "./home.css";
import Leftnav from "./img/LeftArrow.svg";
import Rightnav from "./img/RightArrow.svg";
import Headphones from "./videos/Headphones.mov";
import Earbuds from "./videos/earbuds2.mp4";
import Smartwatch from "./videos/Smartwatch.mov";
import Speaker from "./videos/Speaker.mp4";
import Earphone from "./videos/Earphones.mp4";
import Mic from "./videos/Mic.mp4";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Products = () => {
  useEffect(()=> {
    AOS.init({duration:2000});
  })
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollProducts = (direction) => {
    const container = document.getElementById('productHolder');
    const newScrollPosition = scrollPosition + direction * 400; // Adjust the value based on your product width
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
    setScrollPosition(newScrollPosition);
  };

  return (
    <div className='main-content'  data-aos="fade-up">
      <div className='heading-main'><span>Top Categories</span> <Link>View all</Link></div>
      {/* <div className='navigator' onClick={() => scrollProducts(-1)}>
        ❮
      </div> */}
      <div className='product-holder' id='productHolder'>
        <div className='product'>
            <video loop autoPlay muted>
                <source src={Headphones} type='video/mp4'/>
            </video>
            <span>Headphones</span>
        </div>
        <div className='product'>
            <video loop autoPlay muted>
                    <source src={Smartwatch} type='video/mp4'/>
            </video>
            <span>Smartwatch</span>
        </div>
        <div className='product'>
            <video loop autoPlay muted>
                    <source src={Speaker} type='video/mp4'/>
            </video>
            <span>Speaker</span>
        </div>
        <div className='product'>
            <video loop autoPlay muted>
                    <source src={Earbuds} type='video/mp4'/>
            </video>
            <span>Earbuds</span>
        </div>
        <div className='product'>
        <video loop autoPlay muted>
                    <source src={Earphone} type='video/mp4'/>
            </video>
            <span>Earphones</span>
        </div>
        <div className='product'>
        <video loop autoPlay muted>
                    <source src={Mic} type='video/mp4'/>
            </video>
            <span>Mic</span>
        </div>

        {/* <div className='product'></div> */}
      </div>
      <div>
        <div className='navigator' onClick={() => scrollProducts(-1)}><img src={Leftnav}></img></div>
        <div className='navigators' onClick={() => scrollProducts(1)}><img src={Rightnav}></img></div>
      </div>
      {/* <div className='navigator' onClick={() => scrollProducts(1)}>
        ❯
      </div> */}
      
    </div>
  );
};

export default Products;

// import React from 'react';
import React, { useEffect, useState } from 'react';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cart from './img/icons8-mine-cart-64.png';
import Profile from './img/profile2.png';
import Products from './Products';
import { Link } from 'react-router-dom';
import DarkMode from "../DarkMode/DarkMode/DarkMode";
import CarouselSlider from './Carouselheadphone';
import Headphone from "./img/Gaming Headphones.png";
// import Earpods from './img/earpods.jpg';
// import Earpods2 from "./img/earpods2.jpg";
// import Gamingearphone from "./img/Gaming Earphones.png";
import GamingHeadphones from "./img/Gaming Headphones (1).png";
import Earpods from "./img/earpods.jpg";
import Earpods2 from "./img/earpods2.jpg";
import GamingHeadphones2 from "./img/Gaming_Headphone1.jpg";
import Gamingearphones from "./img/Gaming Earphones.png";
import Onestop from "./img/One-stop3.mp4";
import soundism from "./img/soundism (2).jpg";
import warranty from "./img/warranty.png";
import shipping from "./img/free-shipping.png";
import replacement from "./img/replacement.png";
import Facebook from "./img/facebook (1).png";
import Threads from "./img/threads.png";
import Twitter from "./img/twitter.png";
import Instagram from "./img/instagram.png";
import Linkedin from "./img/linkedin-logo.png";
import protunes from "./img/Protunes.png";
import { createContext } from 'react';
import ReactSwitch from "react-switch";
export const ThemeContext=createContext(null);


const Home = () => {
  useEffect(()=> {
    AOS.init({duration:2000});
  })
  const carouselItems = [
    // <div className='video-container'>
    //    <video autoPlay muted loop>
    //     <source src={Onestop} type="video/mp4" />
    // </video>
    // </div>,
    <div className='image1'></div>,
    <div className='image3'></div>,
    <div className='image4'></div>,
    // <div className='image2'></div>,
    // <div className='image5'></div>,
     // eslint-disable-next-line
    <img key="image4" src={soundism} alt="Image 4" />,

  ];
  
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [theme,setTheme]=useState("dark")
  const toggleTheme = () =>
  {
    setTheme((curr)=>(curr==="dark" ? "light" : "dark"))
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className={`holderall ${isScrolled ? 'scrolled' : ''}`} id='theme'>
      <nav className='navv' data-aos="fade-down">
        <div className='navbar'>
          {/* <ReactSwitch className='switch' onChange={toggleTheme} checked={theme === "light"}></ReactSwitch> */}
          {/* <DarkMode onChange={toggleTheme} checked={theme==="light"}></DarkMode> */}
          <span>Soundism</span>
          <Link className='links'>Gift with Soundism</Link>
          <Link className='links'>About</Link>
          <Link className='links'>Support</Link>
          <Link className='links'>Products</Link>
          <div class='box'>
            <form name='search'>
              <input type='text' class='input' name='txt' onmouseout="this.value = ''; this.blur();" />
            </form>
            {/* <i class="fas fa-search"></i> */}
          </div>
          <img src={Cart} height='40px' width='40px' className='carts' alt='Cart' />
          <img src={Profile} height='40px' width='40px' className='profile' alt='Profile' />
        </div>
      </nav>
      <CarouselSlider items={carouselItems} />
      {/* <div className='main-content'>
        <div className='heading-main'>Our Bestsellers</div>
        <div className='product-holder'>
          <div className='product'></div>
          <div className='product'></div>
          <div className='product'></div>
          <div className='product'></div>
        </div>
      </div> */}
      <Products></Products>
      <div className='onestop' data-aos="fade-up">
        <video autoPlay loop muted>
          <source src={Onestop} type='video/mp4' />
        </video>
      </div>
      <div className='heading-main2' data-aos="fade-up"><span>Freshly Debuted</span> <Link>View all</Link></div>
      {/* <div className='sub-content'>
        
        <div className='debuted-holder'>
          <div className='debuted-product'>
            <div className='debuimg'>
              <img src={Headphone} />
              <p className='product-gap'></p>
              <span className='product-name'>Soundism RaptorRumble</span>
              <p className='product-tagline'>Unleash the Roar of Immersive Sound with Soundism RaptorRumble.</p>
              <div className='price-but-holder'>
                <div className='price-holder'>
                  <span className='price-pro'>₹2699</span>
                  <span className='cutprice-pro'>₹3699</span>
                </div>
                <div className='button-holder'>
                  <button className='buynow'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='debuted-product'>
            <div className='debuimg'>
              <img src={Earpods} />
              <p className='product-gap'></p>
              <span className='product-name'>Soundism SparkWave</span>
              <p className='product-tagline'>Ignite Your Auditory Experience with Soundism SparkWave.</p>
              <div className='price-but-holder'>
                <div className='price-holder'>
                  <span className='price-pro'>₹1499</span>
                  <span className='cutprice-pro'>₹1999</span>
                </div>
                <div className='button-holder'>
                  <button className='buynow'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='debuted-product'>
            <div className='debuimg'>
              <img src={GamingHeadphones2} />
              <p className='product-gap'></p>
              <span className='product-name'>Soundism ImmersiveXperience</span>
              <p className='product-tagline'>Dive into an Unforgettable Auditory Journey with Soundism ImmersiveXperience</p>
              <div className='price-but-holder'>
                <div className='price-holder'>
                  <span className='price-pro'>₹4699</span>
                  <span className='cutprice-pro'>₹7199</span>
                </div>
                <div className='button-holder'>
                  <button className='buynow'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='debuted-product'>
            <div className='debuimg'>
              <img src={Gamingearphones} />
              <p className='product-gap'></p>
              <span className='product-name'>Soundism AeroWave Wired</span>
              <p className='product-tagline'>Elevate Your Sonic Experience with Soundism AeroWave Wired-Where Precision Meets Power</p>
              <div className='price-but-holder'>
                <div className='price-holder'>
                  <span className='price-pro'>₹699</span>
                  <span className='cutprice-pro'>₹1199</span>
                </div>
                <div className='button-holder'>
                  <button className='buynow'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='card-holder' data-aos="fade-up">
        <div className='card'>
          <img src={Headphone} />
          <p className='product-gap'></p>
          <p className='product-gap'></p>
          <span className='product-name'>Soundism AeroWave Wired</span>
              <p className='product-tagline'>Elevate Your Sonic Experience with Soundism AeroWave Wired-Where Precision Meets Power</p>
              <div className='price-but-holder'>
                <div className='price-holder'>
                  <span className='price-pro'>₹1099</span>
                  <span className='cutprice-pro'>₹3199</span>
                </div>
                <div className='button-holder'>
                  <button className='buynow'>Buy Now</button>
                </div>
              </div>
        </div>
        <div className='card' >
          <img src={Earpods} />
              <p className='product-gap'></p>
              <p className='product-gap'></p>
              <span className='product-name'>Soundism SparkWave</span>
              <p className='product-tagline'>Ignite Your Auditory Experience with Soundism SparkWave.</p>
              <div className='price-but-holder'>
                <div className='price-holder'>
                  <span className='price-pro'>₹1199</span>
                  <span className='cutprice-pro'>₹1999</span>
                </div>
                <div className='button-holder'>
                  <button className='buynow'>Buy Now</button>
                </div>
              </div>
        </div>
        <div className='card'>
        <img src={GamingHeadphones2} />
              <p className='product-gap'></p>
              <p className='product-gap'></p>
              <span className='product-name'>Soundism ImmersiveXperience</span>
              <p className='product-tagline'>Dive into an Unforgettable Auditory Journey with Soundism ImmersiveXperience</p>
              <div className='price-but-holder'>
                <div className='price-holder'>
                  <span className='price-pro'>₹4699</span>
                  <span className='cutprice-pro'>₹7199</span>
                </div>
                <div className='button-holder'>
                  <button className='buynow'>Buy Now</button>
                </div>
              </div>
        </div>
        <div className='card'>
          <img src={Gamingearphones} />
          <p className='product-gap'></p>
          <p className='product-gap'></p>
              <span className='product-name'>Soundism AeroWave Wired</span>
              <p className='product-tagline'>Elevate Your Sonic Experience with Soundism AeroWave Wired-Where Precision Meets Power</p>
              <div className='price-but-holder'>
                <div className='price-holder'>
                  <span className='price-pro'>₹699</span>
                  <span className='cutprice-pro'>₹1199</span>
                </div>
                <div className='button-holder'>
                  <button className='buynow'>Buy Now</button>
                </div>
              </div>
        </div>
      </div>
      <div className='pluspoint-holder'  data-aos="fade-up">
        <div className='pluspoint'>
          <img src={warranty} />
          <h4><span>2 Years</span> Warranty</h4>
        </div>
        <div className='pluspoint'>
          <img src={replacement} />
          <h4><span>14 Day</span> Free Replacement</h4>
        </div>
        <div className='pluspoint'>
          <img src={shipping} />
          <h4><span>Free</span> Shipping</h4>
        </div>
      </div>
      <div className='banner'  data-aos="fade-up"></div>
      <div className='heading-main2' data-aos="fade-up"><span>Blogs</span> <Link>See all blogs by Soudism</Link></div>
      <div className='blogholder'  data-aos="fade-up">
        <div class="card2" >
        <div class="image"></div>
          <div class="content">
            <a href="#">
              <span class="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </a>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium 
            </p>
            <a class="action" href="#">
              Find out more
              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <div class="card2" >
        <div class="blog2"></div>
          <div class="content">
            <a href="#">
              <span class="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </a>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium 
            </p>
            <a class="action" href="#">
              Find out more
              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <div class="card2" >
        <div class="blog3"></div>
          <div class="content">
            <a href="#">
              <span class="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </a>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium 
            </p>
            <a class="action" href="#">
              Find out more
              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <div class="card2" >
        <div class="blog4"></div>
          <div class="content">
            <a href="#">
              <span class="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </a>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium 
            </p>
            <a class="action" href="#">
              Find out more
              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className='space'></div>
      <div className='footer'>
        <div className='footer-part1' data-aos="fade-up">
          <h2>Stay in the loop! <br></br>Sign up for our exclusive email updates now!</h2>
          <div className='mail-box'>
            <input type='email' className='email-box' placeholder='Enter Your Email Address'/>
            <div className='enter'><button>→</button></div>
          </div>
        </div>
        <div className='footer-part2' data-aos="fade-up">
          <h3>Help</h3>
          <br></br>
          <p>FAQs</p>
          <p>Track Order</p>
          <p>Warranty</p>
          <p>Support</p>
          <p>About</p>
          <p>Return Policy          </p>
        </div>
        <div className='footer-part3' data-aos="fade-up"></div>
      </div>
      <div className='footerend' data-aos="fade-up">
      <h2>Let's get social! Follow us for the latest updates and exclusive content!</h2>
        <div className='footerimg'>
          <img src={Facebook}/>
          <img src={Instagram}/>
          <img src={Twitter}/>
          <img src={Threads}/>
          <img src={Linkedin}/>
        </div>
        <h6>Terms & Conditions Apply</h6>
        <h5>© 2024 Soundism Private Limited.</h5>
        <br></br>
        <h3>Website by Dharmeesh Rathod</h3>
        {/* <h6>Privacy Policy</h6> */}
      </div>
    </div>  
    
    </ThemeContext.Provider>
  );
};

export default Home;

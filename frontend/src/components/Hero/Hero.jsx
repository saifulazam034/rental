import React from 'react'
import "./Hero.css"
import{HiLocationMarker} from "react-icons/hi"
const Hero = () => {
  return (
    <section className="hero-wrapper">
        < div className="paddings innerwidth flexCenter hero-container">
            {/*leftside*/}
            < div className="flexColCenter hero-left">
                <div className="hero-title">
                    <div className="Orange-circle"/>
                    <h1>Discover<br/>Most suitable<br/>
                    House</h1>
                </div>
                <div className=" flexColCenter hero-des">
                    <span secondaryText>Find a variety of houses that suit
                        </span>
                        <span secondaryText>Forget all difficulties in findding a residence for you</span>
                       
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)"size={35}/>
                    <input type="text"placeholder='check the address' />
                    <div className="button">Search</div>
                </div>
                </div>
            
{/*rightside*/}
            <div className="flexCenter hero-right">
                <div className="flexCenter image-container">
                    <img src="./h5.png"alt=""/>
                </div>
            </div>
        </div>
    </section>

  );
};

export default Hero
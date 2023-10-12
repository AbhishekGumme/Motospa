import Header from "./../../Header/Header";
import Footer from "../../Footer/Footer";

import { useNavigate } from 'react-router'
import Signin from '../Signin'
import './index.css'
import { Link } from 'react-router-dom'

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {

    // get the logged in user's information
    const { id, firstName, lastName } = sessionStorage
    const navigate = useNavigate()



    const logoutUser = () => {
        // remove the logged users details from session storage
        sessionStorage.removeItem('id')
        sessionStorage.removeItem('firstName')
        sessionStorage.removeItem('lastName')
        sessionStorage.removeItem('loginStatus')

        // navigate to sign in component
        navigate('/signin')
    }


    return (
        <div >
            <Header/>
            
        <div style={{ display: "block", width: 1520, padding: 1 }}>
            
            <Carousel>
            <Carousel.Item interval={2500}>
                <Carousel.Caption>
                   {/* // <h2 style={{ color: 'orange' }}>Your Car Our Responsibility...</h2> */}
                    
                </Carousel.Caption>
                    <img src={require('../../images/image5.jpg')} className="img"  ></img>
                </Carousel.Item> 

                <Carousel.Item interval={2500}>
                <Carousel.Caption>
                   {/* // <h2 style={{ color: 'orange' }}>Your Car Our Responsibility...</h2> */}
                    
                </Carousel.Caption>
                    <img src={require('../../images/image4.jpg')} className="img"  ></img>
                </Carousel.Item> 


                <Carousel.Item interval={2500}>
                <Carousel.Caption>
                   {/* // <h2 style={{ color: 'orange' }}>Your Car Our Responsibility...</h2> */}
                    
                </Carousel.Caption>
                    <img src={require('../../images/slide_2.png')} className="img"  ></img>
                </Carousel.Item>    
                

                <Carousel.Item interval={2500}>
                <Carousel.Caption>
                    
                    </Carousel.Caption>
                    <img src={require('../../images/slide_1.png')}className="img" ></img>
                </Carousel.Item>
            </Carousel>
            
            
        </div>
        
        <div  className="side"   >

            <br/>  
          <br/>
          <br/>

            <div className="row" >    
            <h2 className="tag"><mark><em>Moto Spa Features</em></mark></h2>   
            </div>

            <br/>

            <div className="row" >
                <div className="col" style={{ display: "block" , padding: 30 }}>
                <div className="row">
                    <img src={require('../../images/Features/f1.png')}className="features" style={{height:120, width: 150, padding: 1  }}></img>
                </div>
                <div className="row"  >
                
                <b>Experienced And Trained</b>
                VehicleCare has been servicing cars since 2016, so we've seen it all! We are equipped to handle any situation whether it's a routine oil change or an emergency on the side of the road.
                </div>
                </div>

                <div className="col"  style={{ display: "block" , padding: 30 }}>
                <div className="row">
                <img src={require('../../images/Features/f3.png')}className="features" style={{height:120, width: 150, padding: 1 }}></img>
                </div>
                <div className="row">
                <b>Customizable Scheduling</b>
                Search for a time slot near you and we'll give you a list of available time slots! No need to browse our schedule!</div>
                </div>

                <div className="col" style={{ display: "block" , padding: 30 }}>
                <div className="row">
                <img src={require('../../images/Features/f2.png')}className="features" style={{height:120, width: 150, padding: 1 }}></img>
                </div>
                <div className="row">
                <b>Reliable And Affordable</b>
                VehicleCare's expert mechanics will meet your vehicle service needs at an affordable rate. Our affordable prices will satisfy any budget without compromising quality.
                </div>
                </div>

                <div className="col"style={{ display: "block" , padding: 30 }}>
                <div className="row">
                <img src={require('../../images/Features/f4.png')}className="features" style={{height:120, width: 150, padding: 1 }}></img>
                </div>
                <div className="row">
                <b>Quality Repairs</b>
                We make sure our customers feel confident about their vehicles after we complete a repair or any other service on their vehicle.</div> 
                </div>
                <br/>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="row" >    
            <h2 className="tag"><mark><em>Our Promises</em></mark></h2>   
            </div>
            <br/>

            <div className="row" >
                <div className="col" style={{ display: "block" , padding: 30 }}>
                <div className="row">
                    <img src={require('../../images/Promises/p1.png')}className="features" style={{height:120, width: 150, padding: 1,}}></img>
                </div>
                <div className="row">
                <b>Genuine Parts</b>
                Top-notch quality with OEM/OES spares only</div>
                </div>

                <div className="col"  style={{ display: "block" , padding: 30 }}>
                <div className="row">
                <img src={require('../../images/Promises/p2.png')}className="features" style={{height:120, width: 150, padding: 1 }}></img>
                </div>
                <div className="row">
                <b>Transparent</b>
                24x7 assistance and live status updates.</div>
                </div>

                <div className="col"  style={{ display: "block" , padding: 30 }}>
                <div className="row">
                <img src={require('../../images/Promises/p3.png')}className="features" style={{height:120, width: 150, padding: 1 }}></img>
                </div>
                <div className="row">
                <b>Hassel-Free</b>
                Services delivered through bespoke solutions.
                </div>
                </div>

                <div className="col"  style={{ display: "block" , padding: 30 }}>
                <div className="row">
                <img src={require('../../images/Promises/p4.png')}className="features" style={{height:120, width: 150, padding: 1}}></img>
                </div>
                <div className="row">
                <b>Honest Pricing</b>
                Best quote in the industry for your car service.
                </div>
                </div>

                <br/>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="row">
            <h2 className="tag"><mark><em>Our Happy Customers</em></mark></h2>   
            </div>
            <br/>

            <div className="row">
                <div className="col" style={{ display: "block" , padding: 30 }}>
                <div className="row">
                Best place for automotive service with affordable price and also they are customer friendly. They have satisfied all my needs regarding my car</div>
                <hr></hr>
                <b>Hiron Bose</b>
                </div>
                

                <div className="col" style={{ display: "block" , padding: 30 }}>
                <div className="row">
                Good performance of work and experienced technicians. The vehicle was delivered within the given time. The experience was great with the team and their mechanics</div>
                <hr></hr>
                <b>Suraja P.K.</b>
                </div>

                <div className="col" style={{ display: "block" , padding: 30 }}>
                <div className="row">
                Car care is really a very good multi-brand service center for the car. They do know what to do, they diagnose the problem exactly and solve it. They have a handful of expert people to solve the issue, best in service</div>
                <hr></hr>
                <b>Soorya M</b>
                </div>


                <br/>
            </div>

            <br/>
            <br/>
            <br/>
            
            <div className="row" >
            <h2 className="tag" ><mark><em>Brand We Serve</em></mark></h2>   
            </div>
            <br/>

            <div className="row">
            <img src={require('../../images/logo_car.png')}className="features" style={{height:500, width: 1500, padding: 1}}></img>  
             </div>   


               

            <br/>
            <br/>
            <br/>
       

        </div>
        <Footer/>
        </div>
    )
}

export default Home

{/* 
<div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>

                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>

                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>

                </div> */}
                {/* <div className="col">
                <div className="row">
                    <img src={require('../../images/slide_one.png')}className="features"></img>
                </div>
                <div className="row">

                <b>VehicleCare's expert mechanics</b>
                Reliable And Affordable
                will meet your vehicle service needs at an affordable rate. Our affordable prices will satisfy any budget without compromising quality.</div>
                </div>
                <div className="col">
                <div className="row">
                <img src={require('../../images/slide_one.png')}className="features"></img>
                </div>
                <div className="row">
                <b>VehicleCare's expert mechanics</b>
                Reliable And Affordable
                will meet your vehicle service needs at an affordable rate. Our affordable prices will satisfy any budget without compromising quality.
                </div>
                </div>
                <div className="col">
                <div className="row">
                <img src={require('../../images/slide_one.png')}className="features"></img>
                </div>
                <div className="row">
                <b>VehicleCare's expert mechanics</b>
                Reliable And Affordable
                will meet your vehicle service needs at an affordable rate. Our affordable prices will satisfy any budget without compromising quality.
                </div>
                </div>
                <div className="col">
                <div className="row">
                <img src={require('../../images/slide_one.png')}className="features"></img>
                </div>
                <div className="row">
                <b>VehicleCare's expert mechanics</b>
                Reliable And Affordable
                will meet your vehicle service needs at an affordable rate. Our affordable prices will satisfy any budget without compromising quality.</div> 
                </div>
                <br/> */}
            {/* </div> */}
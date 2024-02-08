import './index.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const AboutUs = () => {

    return (
        <div>
        <Header/>
        <div className="banner-abt">
        <div class="row">
        
        <h1 className="signin-title" style={{marginTop:"20px"}}>About Us</h1>
        </div>
        </div>
        <br/>
        <div className="info">
        <div className="row">
            
            {/* info about about us */}
            <div className="col">
               <div className="abt">
               CarCare is an multi-brand car service company working towards simplifying car service & repair 
                through clever and cost-effective solutions. We offer everything from scheduled services like Oil Change,
                Oil Filter Change , Wheel alignment check , wheel balancing , Brake fluid check and top-up
                Anti-freeze coolant , Steering  check ,Power steering  fluid check,suspension check, Air conditioning check and top-up.

                </div> 

                <br/>

                <div className="abt">
                Every one of our partners workshop is well-equiped with present-day machinery and best equipment in the business is 
                utilized at all our workshops. Every one of our mechanics and professionals is trained and has many expertise,
                Our professionals know how to handle a wide range of car services. 
                Whether you drive a passenger car or medium sized truck or SUV, our mechanics 
                strive to ensure that your vehicle will be performing at its best before 
                leaving our car shop. Whether you drive a medium sized truck or passenger car 
                or SUV, our mechanics strive to ensure.
                </div>
                <br/>

                <div className="abt">
               
                We save through our bulk purchasing power of spare parts and consumables because of our progressive  business model
                and solid purchasing.
                <br/>  
                Think about what! We give the advantage directly to you!
                </div>

                
            </div>

            {/* images */}
            <div className="col">
                <img className='img-abt' src={require('../../images/women-men.png')} height={500} width={840}></img>
                <div className="row">
                    <div className="col"><img  src={require('../../images/men.png')} height={250} width={415}></img></div>
                    <div className="col"><img  src={require('../../images/engine.png')} height={250} width={400}></img></div>
                </div>
                
                
            </div>
            </div>
        </div>
        <Footer/>

    </div>
    )
}

export default AboutUs
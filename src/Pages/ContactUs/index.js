import './index.css'
import emailjs, { send } from 'emailjs-com'
import { useState } from 'react'
import Footer from '../../Footer/Footer' 
import Header from '../../Header/Header'

const ContactUs = () => {

    const[senderName, setSenderName]=useState('')
    const[senderEmail, setSenderEmail]=useState('')
    const[message, setMessage]=useState('')


    const sendEmail=(e)=>{

        e.preventDefault();

        send(
            'service_ikswzr2',
            'template_a2ueti6',
            {
                senderName, senderEmail, message
            },
            'uaJ3cnMriAFWj1DO5'
        )
        .then((response)=>{
            console.log('Message sent successsfully', response.status, response.text)
        })
        .catch((err)=>{
            console.log('failed', err)
        })

        e.target.reset()
    } 

    return (
        <div>
            <Header/>
            <div className="container">
            <div className="contact-banner">        
                <div className="row">
                    <div className="col">
                      <h5>Contact Us</h5>
                    </div>
                </div>
                </div>


                <div className="form-info">
                    <div className="row">

                        {/* Form */}
                        <div className="col">
                            <form className="row g-3" onSubmit={sendEmail}>
                                <div className="col-md-12">
                                    <label  className="form-label">Name</label>
                                    <input type="text" className="form-control" 
                                    onChange={(e)=>setSenderName(e.target.value)}
                                    required name="senderName"></input>
                                </div>
                                <div className="col-md-12">
                                    <label  className="form-label">Email</label>
                                    <input type="email" className="form-control"
                                    onChange={(e)=>setSenderEmail(e.target.value)}
                                    required name="senderEmail"></input>
                                </div>
                                
                                <div className="col-12">
                                    <label  className="form-label">Message</label>
                                    <textarea type="text" className="form-control"
                                    onChange={(e)=> setMessage(e.target.value)}
                                    required name="message" ></textarea>
                                </div>
                                <div className="col-12">
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </div>
                            </form>
                        </div>
                        
                        {/* Other info */}
                        <div className="col">
                            <h3>Getting In Touch:</h3>
                            <div className="other-info">
                                <div>We endeavour to respond to all contact form queries within 3 hours Monday to Friday 8am – 5pm.</div>
                            <br/>
                            <div>
                            We do understand that issues with your car can be very stressful, so we offer a support by email at test@project.com
                            </div>
                            <br/>
                            <div>
                            You can also call any of our locations direct to speak with your local Atlas Autoservice team. Please check the Contact Us tab for telephone details and opening times.
                            </div>
                            </div>
                            <br/>
                            <h3>Some of the popular shops:</h3>
                            <div>
                                <div className="row1">
                                <div className="col-left">
                                    Gajanan Auto :  <a href=''>+9011685593</a>
                                </div>
                                <div className="col-right">
                                    Sinha Auto :  <a href=''>+9850909703</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default ContactUs
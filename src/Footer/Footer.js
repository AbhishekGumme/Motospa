import './Footer.css'
import { useNavigate } from 'react-router'

const Footer =()=>{
    const navigate= useNavigate()
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                   
                    {/* Column 1 */}
                    <div className="col">
                        <h4>Contact info</h4>
                        <ul className="list-unstyled">
                        <li>C-DAC, MET IIT, Adagaon, Nashik – 695 581 </li>
                        <li><a href="tel:+91 8547882754">+91 8547882754</a></li>
                        <li><a href="mailto:info@carserviceireland.ie">test@project.com</a></li>
                        </ul>
                        </div>
                    
                    {/* Column 2 */}
                    <div className="col">
                    <h4>Services</h4>
                        <ul className="list-unstyled">
                        <li>Scheduled Services</li>
                        <li>Denting & Painting</li>
                        <li>General Checkup</li>
                        </ul>
                    </div>
                    
                    
                    {/* Column 3 */}
                    <div className="col">
                        <h4>Popular service center near me</h4>
                    <ul className="list-unstyled">
                        <li><a href="/shops" >Garages in Kolhapur</a></li>
                        <li><a href="/shops" >Garages in Pune</a></li>
                        <li><a href="/shops">Garages in Chennai</a></li>
                        <li><a href="/shops">Garages in Delhi</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Car Care Inc | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>
                
        </div>
    )
}

export default Footer



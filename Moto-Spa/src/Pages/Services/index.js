import { Button, Paper } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { URL } from "../../config"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import './index.css'



const Services = () => {
    const navigate = useNavigate()

    const [allservices, setallservices] = useState([])

    const{firstName}=sessionStorage

    const getServices = () => {

        const url = `${URL}/allservices`

        axios.get(url).then((response) => {
            const result = response.data
            console.log(result)

            setallservices(result.data)
            console.log("Services " + JSON.stringify(response.data))
        })

    }

    useEffect(() => {
        getServices()
    }, [])


    return (
        <div>

            <Header />

            <div className="row">
                {/* Services */}
                <div className="col">
                    <div className='services'>

                        {allservices.map((services) => {
                            return (
                                <Box className='service' p={3}>
                                    <div className="row">
                                        <div className="col">
                                            <Paper className="paper" elevation={15} >

                                                <div className="row">
                                                    <div className="col">
                                                        <div className='service-name'>{services.serviceName}</div>
                                                    </div>
                                                    <div className="col">
                                                        <div className='service-price'>
                                                            {services.servicePrice}/-
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="row">
                                                    <div className="col">
                                                        <div className='service-details'>
                                                            {services.serviceDetails}</div>
                                                    </div>
                                                    <div className="col">
                                                        <div className='add-right'>
                                                            <Button variant="contained" onClick={() => {
                                                                sessionStorage['serviceId'] = services.id
                                                                if (firstName != undefined) {
                                                                    navigate("/booking")
                                                                } else {
                                                                    navigate("/signin")
                                                                }
                                                            }
                                                            }>
                                                                Add
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Paper>
                                        </div>
                                    </div>
                                </Box>
                            )
                        })}

                    </div>
                </div>

                {/* Image */}
                <div className="col">
                    <img src={require('../../images/service5.png')} style={{ height: "500px", float: "right", marginRight: "130px" }} />
                </div>


            </div >



            <Footer />
        </div >
    )
}


export default Services



import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { URL } from '../../config'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import './index.css'

const JobCard = () => {

    const [report, setReport] = useState([])
    const [service, setService] = useState([])
    const [user, setUser] = useState([])
    const [shops, setshops] = useState([])
    const [vehicle, setVehicle] = useState([])
    const [model, setModel] = useState([])

    function finalReport() {

        const url = `${URL}/jobcard/${sessionStorage.getItem("jobcardId")}`

        axios.get(url).then((response) => {
            const result = response.data
            setReport(result.data)
            console.log("response " + JSON.stringify(response.data))

            console.log("vehicle " + report.vehicleId)
        }).then(() => {
            console.log("shoppppid :" + user.id)
        }).then(() => {

            const url = `${URL}/shop/findshop/${sessionStorage.getItem("shopId")}`

            axios.get(url).then((response) => {
                const result = response.data
                console.log(response.data)
                setshops(result.data)

            })

        }).then(() => {

            const url = `${URL}/findvehicle/${sessionStorage.getItem("vehicleId")}`

            axios.get(url).then((response) => {
                const result = response.data
                console.log(response.data)
                setVehicle(result.data)


            })

        }).then(() => {

            const url = `${URL}/findmodel/${sessionStorage.getItem("modelId")}`

            axios.get(url).then((response) => {
                const result = response.data
                console.log(response.data)
                setModel(result.data)

            })

        }).then(() => {
            const url = `${URL}/users/finduser/${sessionStorage.getItem("id")}`

            axios.get(url).then((response) => {
                const result = response.data
                console.log(result)

                setUser(result.data)

            })
        }).then(() => {
            const url = `${URL}/findservice/${sessionStorage.getItem("serviceId")}`

            axios.get(url).then((response) => {
                const result = response.data
                console.log(result)

                setService(result.data)

            })
        })
    }


    useEffect(() => {
        finalReport()
    }, [])

    return (
        <div>


            <Header />


            <div className='jobcard'>
                <div className="row">
                    <div className="col">
                        <Box>
                            <Paper elevation={10} >

                                <div className="jobcard-details">

                                    <div className="row">
                                        <div className="col">
                                            <div className="row-name">
                                                <b>Name:</b> {user.firstName}{"\n"}{user.lastName}
                                            </div>
                                            <div className="row-mobile">
                                                <b>Contact:</b> +91{user.mobile}
                                            </div>
                                            <div className="row-address">
                                                <b>Address:</b> {user.address}
                                            </div>
                                            <div className="row-plan">
                                                <b>Service Plan:</b> {service.serviceName}
                                            </div>
                                            <div className="row-services">
                                                <b>Service Details:</b> {service.serviceDetails}
                                            </div>
                                            <div className="row-vehname">
                                                <b>Vehicle Name: </b> {model.makeName}{"\n"}{model.modelName}
                                            </div>
                                            <div className="row-vehplate">
                                                <b>Licence Plate: </b> {vehicle.licencePlate}
                                            </div>
                                            <div className="row-date">
                                                <b>Scheduled Date:</b> {report.date}
                                            </div>
                                            <div className="row-time">
                                                <b>Scheduled Time:</b> {report.time}
                                            </div>

                                            <div className="row-shopname">
                                                <b>Shop: </b> {shops.shopName}
                                            </div>
                                            <div className="row-shopcontact">
                                                <b>Contact:</b> +91{shops.contact}
                                            </div>
                                            <div className="row-shopaddress">
                                                <b>Address:</b> {shops.address}
                                            </div>
                                            <div className="row-price" >
                                                <b>Price:</b> {service.servicePrice}/-
                                            </div>

                                        </div>
                                        <div className="col">
                                            <div className="row-id">
                                                <b>Jobcard Id:</b> {report.id}
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </Paper>
                        </Box>
                    </div>

                    <div className="col">

                    </div>
                </div>
            </div>




            <Footer />

        </div>
    )
}


export default JobCard
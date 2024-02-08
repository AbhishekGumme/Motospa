import { Button, ListItem, Select } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { URL } from '../../config'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import './index.css'
import { useNavigate } from 'react-router'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { Rating } from '@mui/material'
import { Box } from '@material-ui/core'
import { Paper } from '@material-ui/core'




const Shop = () => {
    const navigate = useNavigate();

    // const [shopId, setShopId] = useState('')
    const [city, setCity] = useState("Kolhapur")
    const [allShops, setallShops] = useState([])

    //for make and model

    const [temparr, setTempArr] = useState([])
    const [make, setmakes] = useState(temparr)
    const [model, setModels] = useState([])
    const [totalMakes, setTotalMakes] = useState([])
    const [perticularMakeType, setPerticularMakeType] = useState("");
    const [perticularModelType, setPerticularModelType] = useState("");



    const getShops = () => {

        const body = {
            city,
        }

        sessionStorage['city'] = city


        console.log(city);
        const url = `${URL}/shop/${city}`


        axios.get(url, body).then((response) => {
            const result = response.data
            console.log(result)

            setallShops(result.data)

        })

    }

    useEffect(() => {
        getShops()
    }, [])


    //for make and models api's
    useEffect(() => {
        getAllMakes()
        getAllModels()

    }, [])

    useEffect(() => {
        fetchMakes()
    }, [make])

    function fetchMakes() {
        let tempArr = []

        make.map((e) => {
            tempArr.push(e.makeName)
        })
        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }
        setTotalMakes(tempArr)
        const uniqeMake = tempArr.filter(unique)
        setTotalMakes(uniqeMake)
        // console.log(setTotalMakes)
        // console.log(perticularMakeType)
    }

    const getAllMakes = () => {

        const url = `${URL}/getallmake`
        //const url=`${URL}/getmodel/SUZUKI`

        axios.get(url).then((response) => {
            const result = response.data
            //console.log(result.data)

            setmakes(result.data)


        })

    }

    async function ParticularModelSet(value) {
        setPerticularMakeType(value);
        console.log("some value : " + value)

    }


    const getAllModels = () => {

        const url = `${URL}/getmodel/${perticularMakeType}`

        axios.get(url).then((response) => {
            const result = response.data
            setModels(result.data)

            //console.log("response "+JSON.stringify(response.data))
        })

    }



    async function PerticularModelSet(value) {
        setPerticularModelType(value);
        console.log("model value: " + value)
    }


    return (
        <div>

            <Header />

            <div className="row" style={{ backgroundColor: "bisque" }} >


                <div className="col" >
                    <br />
                    <br />

                    <div className="row"  >

                        <div className="row"  >



                            <br />
                            <br />

                            <div className="col">
                                <br />
                                <div className="asmita">
                                    <select value={city} onChange={(e) => {
                                        console.log(e.target.value)
                                        setCity(e.target.value)

                                    }} >
                                        <option value="Kolhapur">SELECT CITY</option>
                                        <option value="Kolhapur">Kolhapur</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Pune">Pune</option>
                                    </select>
                                </div>
                            </div>

                            <br />
                            <br />

                            <div className="col">
                                <div className="dams" >
                                    <div className="add-button">
                                        <Button variant="contained" onClick={getShops} >
                                            Get Shops
                                        </Button>
                                    </div>
                                </div>
                            </div>






                        </div>
                    </div>
                    <br />
                    <br />


                    <div className="row" >
                        <br />
                        <br />

                        <div className="col">

                            <div className="col">

                            </div>

                            <div classname="col">
                                <div className="omkar">
                                    <select name="" id="" onChange={(e) => {
                                        ParticularModelSet(e.target.value)
                                        sessionStorage.setItem("makename", e.target.value)
                                    }}>

                                        <option  >

                                            SELECT MAKE

                                        </option>
                                        {totalMakes.map((m) => {
                                            return (
                                                <option  >
                                                    {m}
                                                </option>
                                            )
                                        })}

                                    </select>
                                </div>
                            </div>

                        </div>

                        <br />
                        <br />


                        <div className="col">
                            <Button variant='outlined' size='small' onClick={(e) => {
                                getAllModels()
                            }} >
                                SELECT BRAND
                            </Button>
                        </div>


                    </div>

                    <br />
                    <br />


                    <div className="row">
                        <div className="model">
                            <select name="" id="" size="large" onChange={(e) => {
                                getAllModels()
                                sessionStorage.setItem("modelId", e.target.value)
                            }}>
                                <option  >
                                    MODELS
                                </option>
                                {model.map((m) => {
                                    return (
                                        <option value={m.id} >
                                            {m.modelName}
                                        </option>
                                    )
                                })}

                            </select>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>

                <div className="col" >

                    <div className="shopslist">

                        {allShops.map((shop) => {
                            return (

                                <Box className='shop-details' p={3}>
                                    <div className="row">


                                        {/* Add image */}
                                        <div className="col">
                                            <Paper elevation={15}>
                                                <div className="row">
                                                    <div className='shop-name'>{shop.shopName}</div>
                                                </div>

                                                <div className="row">
                                                    <div className='shop-email'>{shop.details}</div>
                                                </div>

                                                <div className="row">
                                                    <div className='shop-contact'>
                                                        <PhoneIcon /> {shop.contact}
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className='shop-address'>
                                                        <LocationOnIcon /> {shop.address}
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col">
                                                        <div className='shop-rating' component="fieldset" mb={3} borderColor="transparent">
                                                            <Rating name="read-only" value={shop.rating} readOnly />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className='add-right'>
                                                            <Button variant="contained" onClick={() => {
                                                                sessionStorage['shopId'] = shop.id
                                                                navigate("/services")
                                                            }} >
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
            </div>

            <Footer />
        </div>
    )
}

export default Shop
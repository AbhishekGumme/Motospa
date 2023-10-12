import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../config'

const AddMakeModel = () => {
    const [makeName, setMakeName] = useState('')
    const [modelName, setModelName] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    



    const navigate = useNavigate()

    const save = () => {
        if (makeName.length == 0) {
            toast.warning('please enter brand name')
        } else if (modelName.length == 0) {
            toast.warning('please enter  model name')
        } else if (vehicleType.length == 0) {
            toast.warning('please enter vehicle Type')
        } 
        else {
            const body = {
                makeName,
                modelName,
                vehicleType
                

                // userId: sessionStorage['id'],
            }

            const url = `${URL}/model/addModel`
            axios.post(url, body).then((response) => {
                const result = response.data
                if (result != null) {
                    toast.success(' new vehicle  added succesfully..')
                    navigate('/allmakes')
                } else {
                    toast.error('failed to add vehicle')
                }
            })
        }
    }

    return (
        <div style={{backgroundColor:"bisque"}}>
            <Header /><br />
            <br/>
     
      <h3 className="display-5 text-center" ><b>Add New Vehicle</b></h3>
          

            <div className="mb-5">
                <Link to="/admin" className="btn btn-light float-end">
                    Go To Admin Page
          </Link>
            </div>


            <div className="row">

                <div className="col">

                </div>


                <div className="col">

                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Brand Name
                            </label>
                            <input
                                onChange={(e) => {
                                    setMakeName(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                               Model Name
                     </label>
                            <input
                                onChange={(e) => {
                                    setModelName(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Vehicle Type
                            </label>
                            <input
                                onChange={(e) => {
                                    setVehicleType(e.target.value)
                                }}
                                rows="10"
                                className="form-control"
                            ></input>
                        </div>

                        <br />
                        <div className="mb-3">
                            <button className="btn btn-success float-end" onClick={save}>
                                Save
                            </button>
                            <Link to="/admin" className="btn btn-danger ">
                                Cancel
                            </Link>
                        </div>

                    </div>

                </div>




                <div className="col">
                </div>

            </div>




            <br />

            <Footer />

        </div>
    )
}

export default AddMakeModel

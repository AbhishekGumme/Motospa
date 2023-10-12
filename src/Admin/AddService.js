import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../config'

const AddService = () => {
  const [serviceName, setServiceName] = useState('')
  const [serviceDetails, setServiceDetails] = useState('')
  const [servicePrice, setServicePrice] = useState('')
  const [shopId, setShopId] = useState('')
  


  const navigate = useNavigate()

  const save = () => {
    if (serviceName.length == 0) {
      toast.warning('please enter Service Name')
    } else if (serviceDetails.length == 0) {
      toast.warning('please enter Shop Details')
    } else if (servicePrice.length == 0) {
      toast.warning('please enter Price of Service')
    } else if (shopId.length == 0) {
      toast.warning('please enter shopId')
    }
    else {
      const body = {
        serviceName,
        serviceDetails,
        servicePrice,
        shopId

        // userId: sessionStorage['id'],
      }

      const url = `${URL}/service/addservice`
      axios.post(url, body).then((response) => {
        const result = response.data
        if (result != null) {
          toast.success(' new service added succesfully..')
          navigate('/allservices')
        } else {
          toast.error('failed to add service')
        }
      })
    }
  }

  return (
    <div style={{backgroundColor:"bisque"}}>
      <Header />
      
      <br/>
      
      <h3 className="display-5 text-center" ><b>Add New Service</b></h3>

      <div className="mb-5">
        <Link to="/admin" className="btn btn-light float-end">
          Go To Admin Page
          </Link>
      </div>
      <hr/>
      

      <div className="row" >

      <div className="col">

      </div>


      <div className="col" >
        
        <div className="form">
          <div className="mb-3">
            <label htmlFor="" className="label-control">
           <b>Service Name :</b> 
          </label>
            <input
              onChange={(e) => {
                setServiceName(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
            <b>Service Details :</b>
          </label>
            <textarea
              onChange={(e) => {
                setServiceDetails(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
            <b>Service Price :</b>
          </label>
            <input
              onChange={(e) => {
                setServicePrice(e.target.value)
              }}
              rows="10"
              className="form-control"
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
           <b> Shop Id : </b>
          </label>
            <input
              onChange={(e) => {
                setShopId(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          
            <br/>
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




      <br/>

      <Footer />

    </div>
  )
}

export default AddService

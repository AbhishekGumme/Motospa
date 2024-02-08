import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../config'
import { useLocation } from 'react-router'
import axios from "axios";



const EditServiceForm = () => {
    const { state } = useLocation()
   
    const [serviceName, setServiceName] = useState('')
    const [serviceDetails, setServiceDetails] = useState('')
    const [servicePrice, setServicePrice] = useState('')
    const [shopId, setShopId] = useState('')

    


    const navigate = useNavigate()
  
    useEffect(() => {
      const { service } = state
      setServiceName(service.serviceName)
      setServiceDetails(service.serviceDetails)
      setServicePrice(service.servicePrice)
      setShopId(service.shopId)
     
    }, [])
  
    const save = () => {
      if (serviceName.length == 0) {
        toast.warning('please enter service name')
      } else if (serviceDetails.length == 0) {
        toast.warning('please enter service details')
      } else if (servicePrice.length == 0) {
        toast.warning('please enter service Price')
      }
        else if (shopId.length == 0) {
            toast.warning('please enter shop Id')
      }                             
      
      else {
        const body = {
            serviceName,
            serviceDetails,
            servicePrice,
            shopId,
            
        }
  
        const url = `${URL}/service/editservice/${state.service.id}`
        axios.put(url, body).then((response) => {
          const result = response.data
          if (result!=null) {
            toast.success('successfully updated service.')
            navigate('/allservices')
          } 
          else {
            toast.error("fail to update service")
          }
        })
      }
    }
  
    return (
        <div><Header/>
        <br/>
        <div className="container table-responsive" style={{backgroundColor:"bisque"}}>
        <br/>
     
     <h3 className="display-5 text-center" ><b>Edit Service Form</b></h3>
        

        <div className="mb-5">
          <Link to="/admin" className="btn btn-light float-end">
            Go To Admin Page
          </Link>
        </div>
        <hr/>
        <br/>
  
        <div className="form">
          <div className="mb-3">
            <label htmlFor="" className="label-control">
              <b>Service Name :</b>
            </label>
            <input
              value={serviceName}
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
            <input
              value={serviceDetails}
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
              value={servicePrice}
              onChange={(e) => {
                setServicePrice(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              <b>Shop Id :</b>
            </label>
            <input readOnly= {true}
              value={shopId}
              onChange={(e) => {
                setShopId(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>
  
        
          

  
          
  
          <div className="mb-3">
            <button onClick={save} className="btn btn-success float-end">
              Save
            </button>
            <Link to="/admin" className="btn btn-danger ">
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <br/>
      <Footer/>
      </div>
    )
  }
  
  export default EditServiceForm
  
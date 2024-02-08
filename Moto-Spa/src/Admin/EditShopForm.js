import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../config'
import { useLocation } from 'react-router'
import axios from "axios";



const EditShopForm = () => {
    const { state } = useLocation()
   
    const [shopName, setShopName] = useState('')
    const [shopEmail, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [details, setDetails] = useState('')
    


    const navigate = useNavigate()
  
    useEffect(() => {
      const { shop } = state

      setShopName(shop.shopName)
      setEmail(shop.shopEmail)
      setContact(shop.contact)
      setCity(shop.setCity)
      setAddress(shop.setAddress)
      setDetails(shop.setDetails)
    }, [])
  
    const save = () => {
      if (shopName.length == 0) {
        toast.warning('please enter shop name')
      } else if (shopEmail.length == 0) {
        toast.warning('please enter shop email')
      } else if (contact.length != 10) {
        toast.warning('please enter contact')
      }
        else if (address.length == 0) {
            toast.warning('please enter address')
      }                             
      else if (details.length == 0) {
        toast.warning('please enter details')
      }else if (city.length == 0) {
            toast.warning('please enter city')
      }
      else {
        const body = {
            shopName,
            shopEmail,
            contact,
            city,
            address,
          details
        }
        
        const url = `${URL}/shop/editshop/${state.shop.id}`
        axios.put(url, body).then((response) => {
          const result = response.data
          if (result!=null) {
            toast.success('successfully updated shop..')
            navigate('/allshops')
          } else {
            toast.error("failed to update shop")
          }
        })
      }
    }
  
    return (
        <div style={{backgroundColor:"bisque"}}>
            <Header /><br/>
        
      <div className="container table-responsive">

      <br/>
        <h3 className="display-5 text-center" ><b>Edit Shop Form</b></h3>
        

        <div className="mb-5">
          <Link to="/admin" className="btn btn-light float-end">
            Go To Admin Page
          </Link>
        </div>
        <hr/>

        <br />
        {/* <div className="row"> */}
        <div className = "col"></div>

        <div className = "col">
        <div className="form">

          <div className="mb-3">
            <label htmlFor="" className="label-control">
             <b> Shop Name :</b>
            </label>
            <input
              value={shopName}
              onChange={(e) => {
                setShopName(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="" className="label-control">
              <b>Shop Email :</b>
            </label>
            <input
              value={shopEmail}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              <b>Shop Contact No. :</b>
            </label>
            <input
              value={contact}
              onChange={(e) => {
                setContact(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              <b>City :</b>
            </label>
            <input
              value={city}
              onChange={(e) => {
                setCity(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>
  
        
          <div className="mb-3">
            <label htmlFor="" className="label-control">
             <b>Shop Address :</b> 
            </label>
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

  
          <div className="mb-3">
            <label htmlFor="" className="label-control">
              <b>Shop Details :</b>
            </label>
            <textarea
              value={details}
              onChange={(e) => {
                setDetails(e.target.value)
              }}
              rows="10"
              className="form-control"
            ></textarea>
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

        <div className = "col"></div>
        {/* </div> */}

      </div>
      <br/>
      <Footer/>
      </div>
    )
  }
  
  export default EditShopForm
  
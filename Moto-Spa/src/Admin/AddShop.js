import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../config'

const AddShop = () => {
  const [shopName, setShopName] = useState('')
  const [shopEmail, setshopEmail] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [details, setDetails] = useState('')


  const navigate = useNavigate()





  const save = () => {
    if (shopName.length == 0) {
      toast.warning('please enter Shop Name')
    } else if (shopEmail.length == 0) {
      toast.warning('please enter Shop Email')
    } else if (contact.length != 10) {
      toast.warning('please enter contact')
    } else if (address.length == 0) {
      toast.warning('please enter address of shop')
    } else if (city.length == 0) {
      toast.warning('please enter city')
    } else if (details.length == 0) {
      toast.warning('please enter details')
    }
    else {
      const body = {
        shopName,
        shopEmail,
        contact,
        address,
        city,
        details,

        // userId: sessionStorage['id'],
      }

      const url = `${URL}/shop/addshop`
      axios.post(url, body).then((response) => {
        const result = response.data
        if (result != null) {
          toast.success(' new shop added succesfully..')
          navigate('/allshops')
        } else {
          toast.error('failed to add shop')
        }
      })
    }
  }

  return (
  
    <div >
      <Header />
      <div    style={{backgroundColor:"bisque"}}>
      <br/>
     
      <h3 className="display-5 text-center" ><b>Add New Shop</b></h3>
      
      
      <div className="mb-5">
        <Link to="/admin" className="btn btn-light float-end">
          Go To Admin Page
          </Link>
      </div>
      
      <hr/>
      

      <div className="row" >

      <div className="col">

      </div>


      <div className="col">
        
        <div className="form">
          <div className="mb-3">
            <label htmlFor="" className="label-control">
              <b>Shop Name : </b>
          </label>
            <input
              onChange={(e) => {
                setShopName(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
            <b> Shop Email :</b>
          </label>
            <input
              onChange={(e) => {
                setshopEmail(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
             <b>Contact No. :</b> 
          </label>
            <input
              onChange={(e) => {
                setContact(e.target.value)
              }}
              rows="10"
              className="form-control"
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              <b>Address :</b>
          </label>
            <textarea
              onChange={(e) => {
                setAddress(e.target.value)
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
              onChange={(e) => {
                setCity(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              <b> Shop Details : </b>
          </label>
            <textarea
              onChange={(e) => {
                setDetails(e.target.value)
              }}
              type="text"
              className="form-control"
            />
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


      </div>

      <div className="col">
        </div>

      </div>




      <br/>
      </div>
      <Footer />
      
    </div>
  
  )
}

export default AddShop









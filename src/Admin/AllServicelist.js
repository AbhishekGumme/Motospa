import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL } from '../config'
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom'


function AllServiceList() {
  useEffect(() => {
    fetchService();
  }, []);

  const navigate=useNavigate()
  const[serviceId, setServiceId]=useState('')
  const [allservice, setallservice] = useState([]);

  const fetchService = () => {
    const url = `${URL}/allservices`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      setallservice(result.data);
    });
  };



  const deleteService = (id) => {

    const url = `${URL}/service/delete/${id}`;

    axios.delete(url).then((response)=>{
        const result= response.data
        console.log(result)
        fetchService()
    })

  };

  return (
    <><Header/>
      <div className="container table-responsive">
        
        <br/>
        <h3 className="display-5 text-center" ><b>All Services</b></h3>

        <div className="mb-5">
          <Link to="/admin" className="btn btn-light float-end">
            Go To Admin Page
          </Link>
          </div>
          

        <br/>
        {allservice !== "" && (
          <table class="table table-hover">
            <thead className="table-primary">
              <tr>
                {" "}
                <th scope="col">Id</th>
                <th scope="col">ServiceName</th>
                <th scope="col">ServiceDetails</th>
                <th scope="col">ServicePrice</th>
                <th scope="col">ShopId</th>
                
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {allservice.map((service) => {
                return (
                  <tr>
                    <td>{service.id}</td>
                    <td>{service.serviceName}</td>
                    <td>{service.serviceDetails}</td>
                    <td>{service.servicePrice}</td>
                    <td>{service.shopId}</td>
                   
                    {/* <td><button type="button" class="btn btn-warning" onClick={()=>{
                      // sessionStorage['shopId']=shop.id
                      // navigate("/editshop")
                    }} >Edit</button></td> */}
                    <td><button type="button" class="btn btn-danger" onClick={() => {
                      deleteService(service.id)
                    }} >Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        
      </div>
      <br/>
      <Footer/>
    </>
  );
}

export default AllServiceList;

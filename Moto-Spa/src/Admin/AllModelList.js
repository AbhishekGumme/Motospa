import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL } from '../config'
import { Link, useNavigate } from 'react-router-dom'


function AllModelList() {
  useEffect(() => {
    fetchModels();
  }, []);

  const [allModels, setAllModels] = useState([]);

  const fetchModels = () => {
    const url = `${URL}/getallmake`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      setAllModels(result.data);
     
    });
  };


  const deleteModel = (id) => {

    const url = `${URL}/makeModel/delete/${id}`;

    axios.delete(url).then((response)=>{
        const result= response.data
        console.log(result)
        fetchModels()
    })

  };

  return (
    <><Header/> 
      <div className="container table-responsive">
      <br/>
        <h3 className="display-5 text-center" ><b>All Vehicles</b></h3>
        
        <div className="mb-5">
          <Link to="/admin" className="btn btn-light float-end">
            Go To Admin Page
          </Link>
          </div>

        <br/>
        {allModels !== "" && (
          <table class="table table-hover">
            <thead className="table-dark">
              <tr>
                {" "}
                <th scope="col">Id</th>
                <th scope="col">MakeName</th>
                <th scope="col">ModelName</th>
                <th scope="col">VehicleType</th>
            
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {allModels.map((model) => {
                return (
                  <tr>
                    <td>{model.id}</td>

                    <td>{model.makeName}</td>
                    <td>{model.modelName}</td>
                    <td>{model.vehicleType}</td>
                    
                    

                    <td><button type="button" class="btn btn-danger" onClick={() => {
                      deleteModel(model.id)
                    }} >Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default AllModelList

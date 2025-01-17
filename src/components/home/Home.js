import React from "react";
import { Form } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Companies from "../companies/Companies";


function Home() {
  return (
    <div className="mt-5">
      <div className="mt-5">
        <div className="header-h2 mx-auto ">
            <h2 className="text-center">We find the best jobs for you</h2>
          <p className="text-center">Search your career opportunity through 12,0800 jobs</p>
        </div>
        </div>
      
    <div  id="header">
      <div className="container class-container bg-white m-5 mx-auto rounded-pill">
        <Form className="mx-auto search-job flex-container">
            
 
        <div className="mx-auto  bg-white"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div  className="">
        <input
        
            type="text"
            name="filter-title"
            className="form-control  search-job"
            value=""
            placeholder="Job title, keywords..."
            spellcheck="false"
            data-ms-editor="true"
          /> 
          </div>
       
        <div  className="mx-auto bg-white">
            
        <Dropdown className="dropdown">
      <Dropdown.Toggle id=""variant="white">
      <i class="fa-solid fa-location-dot"></i> City or Postcode
      </Dropdown.Toggle>


      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div  className="mx-auto  bg-white">
        <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" variant="white">
      <i class="fa-solid fa-briefcase"></i>  All Categories..
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="bg-white"> <Button variant="dark" className=' btn ms-4 me-3 mr-sm-2 rounded-pill '>Find Jobs</Button>
        </div>
             
       
        </Form>
      </div>
    </div>
   
    <p className="text-center">Trusted by companies of all sizes</p>

        <Companies/>
        <div></div>
    
    </div>
    
    
  );
}

export default Home;

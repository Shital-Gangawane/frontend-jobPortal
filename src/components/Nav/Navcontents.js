import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from "react-router-dom";


const Navcontents = () => {
  const navigate = useNavigate();

  const [show,setShow]=useState();
  const [find,setFind]=useState();
  const [employer,setEmployer]=useState();
  const [candidate,setCandidate]=useState();
  const [page,setPage]=useState();
  // const [hide,setHide]=useState();
   
  return (
    <div className=''>
      
       {[ 'xl'].map((expand) => (
     <Navbar key={expand} expand={expand} className="">
          <Container fluid>
            <Navbar.Brand href="#"><img src='./img/logo.jpg' alt=''/></Navbar.Brand>
           
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton className=''>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src='./img/1-final-logo-250.jpg' alt=''/>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className=''>
                <Nav className=" justify-content-start  flex-grow-1">
               
                  <Nav.Link href="/" to={"/"} className='' onMouseOver={()=> setShow(!show) }>Home <i className="fa-solid fa-angle-down show"></i></Nav.Link>
                 
                  <Nav.Link href="#" onMouseOver={()=> setFind(!find) }>Find Jobs <i className="fa-solid fa-angle-down"></i></Nav.Link>
                  <Nav.Link href="#" onMouseOver={()=> setEmployer(!employer) }>Employer <i className="fa-solid fa-angle-down"></i></Nav.Link>
                  <Nav.Link href="/candidate" to={"/candidte"}  onMouseOver={()=> setCandidate(!candidate) }>Candidates <i className="fa-solid fa-angle-down"></i></Nav.Link>
                  <Nav.Link href="#" onMouseOver={()=> setPage(!page) }>Pages <i className="fa-solid fa-angle-down"></i></Nav.Link>
                 
                </Nav>
                
                <Nav.Link href="/Login" className='ms-auto'>            
           <Button variant="light" className='ms-auto  rounded-pill mb-2'  onClick={() => navigate("/login")}>Login/Register</Button>
            </Nav.Link>
            <Nav.Link href="/Login" className=' ms-4 me-3 mr-sm-2 '>            
            <Button variant="dark" className='ms-auto ms-4 me-3 mr-sm-2 rounded-pill job-btn'  onClick={() => navigate("/login")}>Add Jobs</Button>
            </Nav.Link>
            <Nav.Link href="#"><i className="fa-regular fa-bell "></i></Nav.Link> 
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            
          </Container>
          
        </Navbar>
        
        ))}
         {
  show ?
  <div className='hide justify-content-evenly home-div w-50 '>
              <a href="">Home 1</a>
              <a href="">Home 7</a>
              <a href="">Home 13</a>
              <a href="">Home 19</a>
            </div>
  :null
} 

{
  find ?
  <div className='hide justify-content-evenly home-div w-50 '>
              <a href="">Find 1</a>
              <a href="">Find 7</a>
              <a href="">Find 13</a>
              <a href="">Find 19</a>
            </div>
  :null
} 

{
  employer ?
  <div className='hide justify-content-evenly home-div w-50 '>
              <a href="">employer 1</a>
              <a href="">employer 7</a>
              <a href="">employer 13</a>
              <a href="">employer 19</a>
            </div>
  :null
} 
{
  candidate ?
  <div className='hide justify-content-evenly home-div w-50 '>
              <a href="">Candidates 1</a>
              <a href="">Candidates 7</a>
              <a href="">Candidates 13</a>
              <a href="">Candidates 19</a>
            </div>
  :null
} 
{
  page ?
  <div className='hide justify-content-evenly home-div w-50 '>
              <a href="">Pages 1</a>
              <a href="">Pages 7</a>
              <a href="">Pages 13</a>
              <a href="">Pages 19</a>
            </div>
  :null
} 
 
    </div>
  )
}

export default Navcontents

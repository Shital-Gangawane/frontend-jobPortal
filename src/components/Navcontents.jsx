import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function Navcontents() {
  return (
    <div>
          <Navbar expand="lg" className=" justify-content-between ">
     
        <Navbar.Brand href="#home" className='ms-auto'><img src='./img/1-final-logo-250.jpg' alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-0 nav">
           
            <NavDropdown title="Home" id="basic-nav-dropdown" className=''>
              <NavDropdown.Item href="#action/3.1">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home 7
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home 13</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Home 19
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Find Job" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='me-2'>Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home 7
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home 13</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Home 19
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Employee" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home 7
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home 13</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Home 19
              </NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Candidates" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home 7
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home 13</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Home 19
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home 7
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home 13</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Home 19
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Login" className='ms-auto'>            
            <Button variant="light" className='ms-auto  rounded-pill'>Login/Register</Button>
            </Nav.Link>
            <Nav.Link href="/Login" className=' ms-4 me-3 mr-sm-2'>            
            <Button variant="dark" className=' ms-4 me-3 mr-sm-2 rounded-pill job-btn'>Add Jobs</Button>
            </Nav.Link>
            <Nav.Link href="#"><i class="fa-regular fa-bell"></i></Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
  )
}

export default Navcontents
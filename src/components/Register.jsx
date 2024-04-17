import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row';

function Register() {

  return (
    <div className=' d-flex justify-content-center text-start '>
        <div className='bg-white p-3 rounded w-50 '>
            <h2 className='w-100 ms-auto register'>Create a free Superio account</h2>

            <Form className=''>
            {/* <Form.Group>
            <Button variant="light" className='ms-auto  rounded-pill'>Candidate</Button>

            </Form.Group>
            <Form.Group>
            <Button variant="light" className='ms-auto  rounded-pill'>Employer</Button>

            </Form.Group> */}

      <Form.Group  className="register" controlId="formPlaintextEmail">
        <Form.Label column className='mb-3   w-100 ms-auto register'>
          Email
        </Form.Label>
        <Col >
          <Form.Control  placeholder="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group  className="register" controlId="formPlaintextPassword">
        <Form.Label column className='mb-3 mt-3 w-100 ms-auto register' >
          Password
        </Form.Label>
        <Col>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Form.Group  className="register" controlId="formPlaintextPassword">
        <Form.Label column className='mb-3 mt-3 w-100 ms-auto register' >
          Confirm Password
        </Form.Label>
        <Col >
          <Form.Control className='' type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <InputGroup className="mt-3 mb-3 bg-white register">
        <InputGroup.Checkbox aria-label="Checkbox for following text input"  />
        <Form.Label column className='mb-3 mt-3 w-100 ms-3 register' >
        You accept our Terms and Conditions and Privacy Policy
        </Form.Label>
      </InputGroup>

      <Col className='bg-white text-center '>
      <button className="btn btn-success mt-3 ">Register Now</button>
        </Col>
       {/* <p className="register text-end mt-3">Already have an account?<Link to="/Login" className="register">Login</Link> </p> */}
    </Form>
        </div>
    </div>
    
    
  )
}

export default Register
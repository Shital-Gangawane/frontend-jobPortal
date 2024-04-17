import React from 'react'

function Loginpage() {
  return (
    <div> <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Login to Superio</h2>
        <div>
            <span style={{color:"red"}}>Your account has to be confirmed by an administrator before you can login.</span>
        </div>
        <Form className='mx-auto'>


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col >
      <Form.Control  placeholder="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
{/* <a href="/Register"></a> */}
</Form>
    </div>
</div></div>
  )
}

export default Loginpage
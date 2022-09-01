import React from 'react'
import { Form, Row, Button } from 'react-bootstrap';
import "./Adduser.css"


function AddUser() {
  return (
    <div>
    <div className="container" style={{height: '100vh'}}>
        <div className="row justify-center">
            <div className="form col-md-6">
                <Form>
                    <div className="form-group ">
                        <Row>
                        <h2 className='create-label p-5' htmlFor="announcement">Welcome, Create Student Profile</h2>
                        </Row>
                        
                            <label htmlFor="studentname" >Student Name</label>
                            <input type="text" className="form-control" id="studentname" placeholder="Student Name" />
                            <label htmlFor="StudentRegistration" className="" id="student Registration">Student Registration Number</label>
                            <input type="text" className="form-control" id="StudentRegistration" placeholder="Student Registration Number" />
                            <label htmlFor="StudentEmail" className="" id="StudentEmail">Student Email</label>
                            <input type="email" className="form-control" id="StudentEmail" placeholder="Student Email" />
                            <label htmlFor="StudentPassword" className="" id="StudentPassword">Student Password</label>
                            <input type="password" className="form-control" id="StudentPassword" placeholder="Student Password" />
                        {/* <Row>
                            <input type="text" placeholder='Enter Student Name' className="form-control"/>
                        </Row> */}
                        <Row col-md-6 >
                        <Button className="btn btn-primary" type="submit" value='Create'>Create </Button>
                        </Row>
                                                    
                    </div>
                </Form>

            </div>
        </div>

    </div>
</div>
)
}

export default AddUser
import React from 'react'
import { Form, Row, Button } from 'react-bootstrap';
import './announcement.css';

function Announcement() {
  return (
    <div>
        <div className="container" style={{height: '100vh'}}>
            <div className="row justify-center">
                <div className="form col-md-6">
                    <Form>
                        <div className="form-group ">
                            <Row>
                            <label className='create-label p-5' htmlFor="announcement">Welcome, Create Announcement</label>
                            </Row>
                            <Row className="col-md-12 h-24">
                            {/* <Col md={{ span: 6, offset: 3 }}> */}
                            <textarea className="textarea" placeholder='Type in here ...' >
                                
                            </textarea>
                                
                            {/* </Col> */}
                            </Row>
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

export default Announcement;
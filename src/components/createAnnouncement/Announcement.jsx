import React, { useState } from 'react'
import { Form, Row, Button } from 'react-bootstrap';
import './announcement.css';

function Announcement() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technical_mentor_id, setTechnical_mentor_id] = useState(1);
    const [errors, setErrors] = useState("");

    function handleCreateAnnouncement(e) {
        e.preventDefault();

        fetch(
            "https://ratibar-backend.herokuapp.com/announcements"

            , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                    technical_mentor_id 
                }),
            }).then((r) => {
                if (r.ok) {
                    r.json().then((data) => {
                        // onCreateArt(data);
                        console.log(data);
                    });
                } else {
                    r.json().then((err) => setErrors(err.errors));
                }
            });
    }

    return (
        <div>
            <div className="container" style={{ height: '100vh' }}>
                <div className="row justify-center">
                    <div className="form col-md-6">
                        <Form  onSubmit={handleCreateAnnouncement} >
                            <div className="form-group ">
                                <Row>
                                    <h2 className='create-lh2p-5' htmlFor="announcement">Welcome, Create Announcement</h2>
                                </Row>
                                <label>Title</label>
                                <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} name="title"></input>
                                <Row className="col-md-12 h-24">
                                    {/* <Col md={{ span: 6, offset: 3 }}> */}
                                    <textarea className="textarea" placeholder='Type in here ...' value={description} onChange={(e) => setDescription(e.target.value)} >

                                    </textarea>

                                    {/* </Col> */}
                                </Row>
                                {/* <div>
                                    {errors.map((err) => (
                                        <ul key={err}>
                                            <li>{err}</li>
                                        </ul>
                                    ))}
                                </div> */}
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
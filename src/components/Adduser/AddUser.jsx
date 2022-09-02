
import React, { useState } from 'react'

import { Form, Row, Button } from 'react-bootstrap';
import "./Adduser.css"


function AddUser() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNno, setPhoneNo] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState("");




  function handleCreateStudent(e) {
    e.preventDefault();

    fetch(
      "https://ratibar-backend.herokuapp.com/students"

      , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
          phoneNno,
          avatar,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            // onCreateArt(data);
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }



  return (
    <div className='createstudent'>
      <div className="container" style={{ height: '100vh' }}>
        <div className="row justify-center">
          <div className="form col-md-6">
            <Form  onSubmit={handleCreateStudent}>
              <div className="form-group ">
                <Row>
                  <h2 className='create-label p-5' htmlFor="announcement">Welcome, Create Student Profile</h2>
                </Row>

                <label htmlFor="studentname" >Student Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="studentname" placeholder="Student Name" />
                <label htmlFor="StudentEmail" className="" id="StudentEmail">Student Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="StudentEmail" placeholder="Student Email" />
                <label htmlFor="StudentPassword" className="" id="StudentPassword">Student Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="StudentPassword" placeholder="Student Password" />
                <label htmlFor="confirmPassword" className="" id="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="StudentPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                <label htmlFor="confirmPassword" className="" id="confirmPassword">Phone no</label>
                <input type="mobile" className="form-control" id="StudentPassword" value={phoneNno} onChange={(e) => setPhoneNo(e.target.value)} placeholder="Phone_no" />
                <label htmlFor="confirmPassword" className="" id="confirmPassword">Avatar</label>
                <input type="text" className="form-control" id="StudentPassword" value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="avatar" />


                {/* <div>
                  {errors.map((err) => (
                    <ul key={err}>
                      <li>{err}</li>
                    </ul>
                  ))}
                </div> */}
                <Row col-md-6 className="buttonrow">
                  <Button className="btn btn-primary"  type="submit" value='Create'>Create </Button>
                </Row>


              </div>
            </Form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default AddUser;


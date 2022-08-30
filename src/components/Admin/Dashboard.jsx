import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import "./Dashboard.css"
import Photo from "../../images/blackwoman.jpg"
gi
function Admin() {
  return (
    <div className="Cont">

      <div className="container">
        <div className="row">


          <div className="row">
            <div className="user d-flex">
              <div className="col-md-10">
                <h1>
                  Hello <span>User</span>
                </h1>
              </div>
              <div className="avatar col-md-2">
                <img
                  src={Photo}
                  alt="Photo"
                  style={{ height: "12vh", borderRadius: "50%" }}
                />
                <a>Edit</a>
              </div>
            </div>

          </div>
          <div className="row ">
            <div className="buttons col-sm-12 ">
              <div className="btn ">
                <button type='submit'><a href="#formuser">Add user</a></button>
              </div>
              <div className="btn ">
                <button type='submit'><a href="#formuser">Create session</a></button>
              </div>
              <div className="btn ">
                <button type='submit'><a href="#formuser">Add Announcement</a></button>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="card" style={{ height: "100vh" }}>
              <h1>Announcements</h1>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row search my-2">
              <Form className=" search d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
            <div className="row p-5 ">
              <div className="card mb-3">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
              <div className="card mb-3">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
              <div className="card mb-3">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
              <div className="card mb-3">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
              <div className="card mb-3">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
              <div className="card ">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Admin;
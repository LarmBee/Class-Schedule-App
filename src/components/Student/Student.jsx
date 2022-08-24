import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./student.css"

function Student() {
  return (
    <div className="Cont">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div className="card">
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
                  <div className="card col-md-3 col-sm-12 m-2">
                    <h2>Title</h2>
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>5, March 2022</p>
                  </div>
                
                  <div className="card col-md-3 col-sm-12 m-2">
                    <h2>Title</h2>
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>5, March 2022</p>
                  </div>
                
                  <div className="card col-md-3 col-sm-12 m-2">
                    <h2>Title</h2>
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>5, March 2022</p>
                  </div>
                
                  <div className="card col-md-3 col-sm-12 m-2">
                    <h2>Title</h2>
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>5, March 2022</p>
                  </div>
                  <div className="card col-md-3 col-sm-12 m-2">
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

export default Student;

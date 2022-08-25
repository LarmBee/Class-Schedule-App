import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./student.css";
// import Photo from "../../images/Miss.jpeg"
import Like from "../../images/Like.png";
import Comment from "../../images/Comment.png";
import User from "../User/User.js";

function Student() {
  return (
    <div className="Cont">
      <User />
      <div className="container"></div>
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
                <Button className="search-btn">Search</Button>
              </Form>
            </div>
            <div className="row p-3">
              <div className="card col-md-3 col-sm-12 m-2">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
                <div className="reaction">
                  <img src={Like} alt="like" />
                  <img src={Comment} alt="Comment" />
                </div>
              </div>
              <div className="card col-md-3 col-sm-12 m-2">
                <div className="info">
                  <h2>Title</h2>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>5, March 2022</p>
                </div>
                <div className="reaction">
                  <img src={Like} alt="like" />
                  <img src={Comment} alt="Comment" />
                </div>
              </div>
              <div className="card col-md-3 col-sm-12 m-2">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
                <div className="reaction">
                  <img src={Like} alt="like" />
                  <img src={Comment} alt="Comment" />
                </div>
              </div>
              <div className="card col-md-3 col-sm-12 m-2">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
                <div className="reaction">
                  <img src={Like} alt="like" />
                  <img src={Comment} alt="Comment" />
                </div>
              </div>
              <div className="card col-md-3 col-sm-12 m-2">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
                <div className="reaction">
                  <img src={Like} alt="like" />
                  <img src={Comment} alt="Comment" />
                </div>
              </div>
              <div className="card col-md-3 col-sm-12 m-2">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
                <div className="reaction">
                  <img src={Like} alt="like" />
                  <img src={Comment} alt="Comment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;

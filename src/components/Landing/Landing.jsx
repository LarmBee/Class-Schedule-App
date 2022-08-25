import React from "react";
import Typed from "react-typed";
import Card from "react-bootstrap/Card";
import "./Landing.css"

function Landing() {
  return (
    <>
      <div className="land mx-auto" >
      <Card className="typed text-center mx-auto" style={{ height: "70vh", width: "40vw", borderRadius: "15px" }}>
        <Typed strings={["Ratiba"]} typeSpeed={150} backSpeed={150} loop style={{color: "#FF725E", paddingTop: "8%", fontSize: "2rem"}} />
        {/* <h4 style={{ margin: "15px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          consequatur.
        </h4> */}
      </Card>
      </div>
    </>
  );
}

export default Landing;

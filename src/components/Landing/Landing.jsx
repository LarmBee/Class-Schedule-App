import React from "react";
import Typed from "react-typed";
import Card from "react-bootstrap/Card";
import "../Landing/Landing.css";
import mainimg from "../../components/images/Events-cuate.png";
import { Link } from "react-router-dom";

function Landing() {
<<<<<<< HEAD
	return (
		<>
			<Card className="typed " style={{ height: "100%", width: "100%" }}>
				<h1 className="heading-main">RATIBA</h1>
				<div className="design-intro"></div>
				<img className="main-img" src={mainimg} alt="calendar-image"/>
				<h1 className="typed-intro" style={{ fontSize: "32px" }}>
					Ratiba was built for :
					<Typed
						style={{ color: "#111F4D" }}
						strings={["Simplicity", "Ease of Access"]}
						typeSpeed={150}
						backSpeed={150}
						loop
					/>
				</h1>
				<h4 className="main-text">
					Start working with <b>Ratiba.</b>
					<br /> manage your class schedules in a single application
				</h4>
				<Link to="/login" className="btn btn-primary">Get Started</Link>
				

			</Card>
		</>
	);
=======
  return (
    <>
      <div className="land mx-auto" >
      <Card className="typed text-center mx-auto" style={{ height: "70vh", width: "40vw", borderRadius: "15px" }}>
        <Typed strings={["Ratiba"]} typeSpeed={150} backSpeed={150} loop />
        <h4 style={{ margin: "15px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          consequatur.
        </h4>
      </Card>
      </div>
    </>
  );
>>>>>>> ed6dc5b (Feature edit)
}

export default Landing;

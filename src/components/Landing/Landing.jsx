import React from "react";
import Typed from "react-typed";
import Card from "react-bootstrap/Card";
import "../Landing/Landing.css";
import mainimg from "../../images/Events-cuate.png";
import { Link } from "react-router-dom";

function Landing() {
	return (
		<>
			<Card className="typed " style={{ height: "100%", width: "100%" }}>
				<h1 className="heading-main">RATIBA</h1>
				<div className="design-intro"></div>
				<img className="main-img" src={mainimg} />
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
}

export default Landing;

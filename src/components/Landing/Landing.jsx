import React from "react";
import Typed from "react-typed";
import Card from "react-bootstrap/Card";
import "../Landing/Landing.css";
import mainimg from "../../images/schedule-main.jpg"

function Landing() {
	return (
		<>
			<Card className="typed " style={{ height: "100%", width: "100%" }}>
      <div className="design-intro"></div>
      <img className="main-img"src={mainimg}/>
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
					Start working with  <b>Ratiba.</b> and have all your class schedules in a single application
				</h4>
				<button className="btn btn-primary">Get Started</button>
			</Card>
		</>
	);
}

export default Landing;

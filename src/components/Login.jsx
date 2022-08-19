import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/App.css";
import schedule from '../../src/images/schedule.png'
import announcement from '../../src/images/loudspeaker.png'
import update from '../../src/images/updated.png'


function Login() {
	return (
		<div className="Auth-form-container">
        
			{/* Authorization form container */}
			<form className="Auth-form">
            <h1 className="logo-header">Ratiba</h1>
				<div className="Auth-form-content">

					{/* Email section on the form  */}
					<div className="email-form form-group mt-3">
						<label>Email</label>
						<input
							type="email"
							className="form-control mt-1"
							placeholder="Enter your email"
                            id="email-input"
						/>
					</div>

					{/* Password Section on the form  */}
					<div className="password-form form-group mt-3">
						<label>Password</label>
						<input
							type="password"
							className="form-control mt-1"
							placeholder="Password"
                            id="password-input"
						/>
					</div>
					<br />
                    <br/>
					{/* Remember Me section  */}
					<div className="remember-checkbox">
						<input type="checkbox" value="Remember me"></input>
						<label>Remember me</label>
					</div>
					{/* Forgot Password Section  */}
					<p className="forgot-password text-left mt-2">
						{/* <a href="">Forgot password?</a> */}
					</p>
					{/* Submit Button  */}
					<div className="d-grid gap-2 mt-3">
						<button type="submit" className="button-submit" >
							Log in
						</button>
					</div>
				</div>
			</form>
			{/* End of form container */}
			{/* Adding Vertical line to separate divs/sections */}
			<div class="vl"></div>
			<div className="login-info-section">
                <img className="schedule-image" src={schedule}alt="schedule"/>
				<h5>Schedules</h5>
				<p>
					A modern and clean design system for developing fast and powerful <br/>web
					interfaces.
				</p>
                <img className="schedule-image" src={announcement}alt="schedule"/>

				<h5>Announcements</h5>
				<p>
					A modern and clean design system for developing fast and powerful <br/>web
					interfaces.
				</p>
                <img className="schedule-image" src={update}alt="schedule"/>

				<h5>Updates</h5>
				<p>
					A modern and clean design system for developing fast and powerful<br/> web
					interfaces.
				</p>
			</div>
		</div>
	);
}

export default Login;

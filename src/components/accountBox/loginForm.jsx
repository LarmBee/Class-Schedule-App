import React, { useState, useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
} from "./common";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

export function LoginForm(props) {
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const { switchToSignUp } = useContext(AccountContext);
	let navigate = useNavigate();

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user);
			navigate('/student')
		} catch (error) {
			var errorCode = error.code;

			if (errorCode === 'auth/user-not-found') {
				alert("user not found");
			 } else if (errorCode === 'auth/wrong-password') {
				alert("wrong password");
			 } 
		}
	};

	return (
		<BoxContainer>
			<FormContainer>
				<Input
					type="email"
					placeholder="Email"
					onChange={(event) => {
						setLoginEmail(event.target.value);
					}}
				/>
				<Input
					type="password"
					placeholder="Password"
					onChange={(event) => {
						setLoginPassword(event.target.value);
					}}
				/>
			</FormContainer>
			<Marginer direction="vertical" margin={5} />
			<MutedLink href="#">Forgot your password?</MutedLink>
			<Marginer direction="vertical" margin="1.6em" />
			<SubmitButton onClick={login} type="submit">
				Signin
			</SubmitButton>
			<Marginer direction="vertical" margin="1em" />
			<MutedLink href="#">
				Not a User?
				<BoldLink href="#" onClick={switchToSignUp}>
					Admin Signin
				</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}

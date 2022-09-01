import React, { useState, useContext } from "react";
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase-config";
import { useNavigate } from "react-router-dom";


export function SignUpForm(props) {
	const [loginEmail, setLoginEmail] =useState("");
	const [loginPassword, setLoginPassword] =useState("")
	const { switchToSignin } = useContext(AccountContext);

	

	const login = async ()=>{
		try{
			const user = await signInWithEmailAndPassword (
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user)
		}catch(error){
			alert(error.message);
		}
	};

	return (
		<BoxContainer>
			<FormContainer>
				<Input type="text" placeholder="Full Name" />
				<Input type="email" placeholder="Email" onChange={(event)=>{setLoginEmail(event.target.value) }} />
				<Input type="password" placeholder="Password" onChange={(event)=>{setLoginPassword(event.target.value) }}/>
				<Input type="password" placeholder="Confirm Password" />
			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<SubmitButton type="submit" onClick={login}>Sign in</SubmitButton>
			<Marginer direction="vertical" margin="1em" />
			<MutedLink href="#">
				Not an Admin?
				<BoldLink href="#" onClick={switchToSignin}>
					Student Signin
				</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}

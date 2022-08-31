import React, { useState, useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Link } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase-config";



export function LoginForm(props) {
	const [loginEmail, setLoginEmail] =useState("");
	const [loginPassword, setLoginPassword] =useState("")
    const {switchToSignUp} = useContext(AccountContext);
    const[formValues, setFormValues] = React.useState({
		email: '',
		password: ''
	})

	const handleChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value
		})
	}

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
                <Input value={formValues.email}	onChange={handleChange} name='email' type="email" placeholder="Email"/>
                <Input value={formValues.password}	onChange={handleChange} name='password' type="password" placeholder="Password"/>
            </FormContainer>
            <Marginer direction="vertical" margin={5}/>
                <MutedLink href="#">Forgot your password?</MutedLink>
                <Marginer direction="vertical" margin="1.6em"/>
                <SubmitButton onClick={login} type="submit">Signin</SubmitButton>
                <Marginer direction="vertical" margin="1em"/>
                <MutedLink href="#">Not a User?<BoldLink href="#" onClick={switchToSignUp}>Admin Signin</BoldLink></MutedLink>

		</BoxContainer>
	);
}

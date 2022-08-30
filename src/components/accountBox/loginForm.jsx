import React, { useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Link } from "react-router-dom";


export function LoginForm(props) {

    const {switchToSignUp} = useContext(AccountContext);
	return (
		<BoxContainer>
			<FormContainer>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
            </FormContainer>
            <Marginer direction="vertical" margin={5}/>
                <MutedLink href="#">Forgot your password?</MutedLink>
                <Marginer direction="vertical" margin="1.6em"/>
                <SubmitButton type="submit">Signin</SubmitButton>
                <Marginer direction="vertical" margin="1em"/>
                <MutedLink href="#">Not a User?<BoldLink href="#" onClick={switchToSignUp}>Admin Signin</BoldLink></MutedLink>

		</BoxContainer>
	);
}

import React, { useContext } from "react";
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


export function SignUpForm(props) {
	const { switchToSignin } = useContext(AccountContext);

	return (
		<BoxContainer>
			<FormContainer>
				<Input type="text" placeholder="Full Name" />
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Input type="password" placeholder="Confirm Password" />
			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<SubmitButton type="submit">Sign in</SubmitButton>
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

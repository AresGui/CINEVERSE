import React, { useState, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedContext } from '../../navigation/AuthenticatedContext';
import MainNavBar from '../../navigation/components/MainNavBar/MainNavBar';
import { Background, MainContainer } from '../LandingPage/LandingPage.styles';
import { Text, Label, FormButton, FormButtonContainer, Input, Title, TextContainer, SignupRedirect, SignupInfo, MainDiv2 } from '../SignIn/SignIn.styles';

function SignUp() {
    /* const [isAuthenticated, setIsAuthenticated] = useContext(AuthenticatedContext); */
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthenticatedContext);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                console.log(userCredential);
                //set isAuthenticated to true
                setIsAuthenticated(true);
                //redirect to Home
                navigate('/Home');
            }).catch((error) => {
                console.log(error);
            })
        console.log(`email: ${email} Pass: ${pass}`);
    }

    return (
        <>
            <Background>
                <MainNavBar />
                <MainContainer>
                    <MainDiv2>
                        <TextContainer>
                            <Title>SIGN UP</Title>
                            <form onSubmit={handleSubmit}>
                                <Text>
                                    <Label htmlFor="name">Full name</Label>
                                    <Input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='Full name' id="name" name="name" />
                                    <Label htmlFor="email">Email</Label>
                                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@email.com' id="email" name="email" />
                                    <Label htmlFor="password">Password</Label>
                                    <Input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='******' id="password" name="password" />
                                </Text>
                                <FormButtonContainer>
                                    <FormButton type="submit">Sign up</FormButton>
                                </FormButtonContainer>
                            </form>
                            <SignupInfo>
                                <p>Have you already signed up?</p>
                                <SignupRedirect href="/Signin">Sign in here</SignupRedirect>
                            </SignupInfo>
                        </TextContainer>
                    </MainDiv2>
                </MainContainer>
            </Background>
        </>
    )
}

export default SignUp;
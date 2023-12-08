import { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedContext } from '../../navigation/AuthenticatedContext';
import MainNavBar from '../../navigation/components/MainNavBar/MainNavBar';
import { Background, MainContainer } from '../LandingPage/LandingPage.styles';
import { Text, Label, FormButton, FormButtonContainer, Input, Title, TextContainer, SignupRedirect, SignupInfo, MainDiv2 } from './SignIn.styles';


function SignIn() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthenticatedContext);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
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
                            <Title>SIGN IN</Title>
                            <form onSubmit={handleSubmit}>
                                <Text>
                                    <Label htmlFor="email">Email</Label>
                                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@email.com' id="email" name="email" />
                                    <Label htmlFor="password">Password</Label>
                                    <Input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='******' id="password" name="password" />
                                </Text>
                                <FormButtonContainer>
                                    <FormButton type="submit">Sign in</FormButton>
                                </FormButtonContainer>
                            </form>
                            <SignupInfo>
                                <p>Yo don't have an account?</p>
                                <SignupRedirect href="/Signup">Sign up here</SignupRedirect>
                            </SignupInfo>
                        </TextContainer>
                    </MainDiv2>
                </MainContainer>
            </Background>
        </>
    )
}

export default SignIn;

import { Button } from "@mui/material"
import Head from "next/head"
import styled from "styled-components"
import { auth, provider } from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {

    const signIn = () => {
        signInWithPopup(auth, provider).catch(alert)
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo
                    src="https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png"
                />
                <Button variant="outlined" onClick={signIn}>Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    /* background-color: whitesmoke; */
    background: url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg');
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;

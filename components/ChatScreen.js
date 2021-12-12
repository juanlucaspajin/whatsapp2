import { AttachFile } from "@mui/icons-material";
import MoreVert from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function ChatScreen({ chat, messages }) {
    const [user] = useAuthState(auth);
    return (
        <Container>
            <Header>
                <Avatar />

                <HeaderInformation>
                    <h3>Recipient email</h3>
                    <p>Last seen ..</p>
                </HeaderInformation>

                <HeaderIcons>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </HeaderIcons>
            </Header>

            <MessageContainer>
                <EndOfMessage />
            </MessageContainer>
        </Container>
    )
}

export default ChatScreen


const Container = styled.div``;

const Header = styled.div`
    position: sticky;
    background-color: white;
    z-index: 100;
    top: 0;
    display: flex;
    padding: 11px;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
    margin-left: 15px;
    flex: 1;

    >  h3 {
        margin-bottom: 3px
    }

    > p {
        font-size: 14px;
        color: gray;
    }
`;

const EndOfMessage = styled.div``;

const HeaderIcons = styled.div``;

const MessageContainer = styled.div``;
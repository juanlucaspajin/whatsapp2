import { Avatar } from "@mui/material";
import styled from "styled-components"
import getRecipientEmail from "../utils/getRecipientEmail";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,app } from '../firebase';
import { collection, where, query, getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { onSnapshot } from 'firebase/firestore';
import { useRouter } from 'next/router'

function Chat({ id, users }) {
    const router = useRouter();
    const [user] = useAuthState(auth);
    const recipientEmail = getRecipientEmail(users, user)
    const [recipientSnapshot, setRecipientSnapshot] = useState(null)

    useEffect(() => {
        onSnapshot(
            query(
                collection(getFirestore(app), 'users'),
                where('email', '==', recipientEmail),
            ),
            (snapshots) => {
                setRecipientSnapshot(snapshots)
            }
        )
    }, [user])

    const recipient = recipientSnapshot?.docs?.[0]?.data()

    const enterChat = () => {
        router.push(`/chat/${id}`);
    }

    return (
        <Container onClick={enterChat}>
            {recipient ? (
                <UserAvatar src={recipient?.photoURL} />
            ) :
                <UserAvatar>{recipientEmail[0]}</UserAvatar>
            }
            <p>{recipientEmail}</p>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-break: break-word;

    :hover {
        background-color: #e9eaeb
    }
`;

const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-right: 15px;
`;
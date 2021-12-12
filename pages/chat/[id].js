import Head from "next/head";
import styled from "styled-components";
import ChatScreen from "../../components/ChatScreen";
import Sidebar from "../../components/Sidebar";
import { collection, getFirestore, getDoc, doc, query, orderBy} from 'firebase/firestore';
import { auth, app, db } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../utils/getRecipientEmail";

function Chat({ chat, messages }) {
    const [user] = useAuthState(auth)
    return (
        <Container>
            <Head>
                <title>Chat with {getRecipientEmail(chat.users, user)}</title>
            </Head>
            <Sidebar />
            <ChatContainer>
                <ChatScreen chat={chat} />
            </ChatContainer>
        </Container>
    )
}

export default Chat;

export async function getServerSideProps(context) {

    const ref = doc(getFirestore(app), 'chats', context.query.id)
    // const ref = getDoc(chatCollection, context.query.id);
    // const q = query(chatCollection, orderBy('timestamp', 'asc'));
    const messagesRef = collection(getFirestore(app), 'messages')

    // const messages = messagesRef.docs.map(doc => ({
    //     ...doc.data(),
    //     id: doc.id
    // })).map(messages => ({
    //     ...messages,
    //     timestamp: messages.timestamp.toDate().getTime()
    // }))

    const messages = [];

    const chatRes = await getDoc(ref);
    const chat = {
        id: chatRes.id,
        ...chatRes.data()
    }

    console.log(chat);

    return {
        props: {
            messages: JSON.stringify(messages),
            chat: chat
        }
    }
}

const Container = styled.div`
    display: flex;

`;

const ChatContainer = styled.div`
    flex: 1;
    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
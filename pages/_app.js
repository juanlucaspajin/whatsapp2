import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import Login from './login';
import Loading from '../components/Loading';
import { serverTimestamp, collection, doc, setDoc } from 'firebase/firestore/lite';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const dbRef = collection(db, 'users');
    if (user) {
      const userDoc = doc(dbRef, user.uid);
      setDoc(userDoc, {
        email: user.email,
        lastSeen: serverTimestamp(),
        photoURL: user.photoURL,
      }, {merge: true})
    }
  }, [user])

  if (loading) return <Loading />
  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp

import { SpinnerCircular } from 'spinners-react';

function Loading() {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <img
                src="https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png"
                alt="loading-logo"
                height={150}
                style={{marginBotton: 10}} />
            <SpinnerCircular color={'#25D366'} secondaryColor={'#075E54'}/>
        </center>
    )
}

export default Loading

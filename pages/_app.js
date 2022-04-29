import  '../styles/global.css';

export default function App({ Component, pageProps}) {
    return <><Component {...pageProps} /><h2>I am layout</h2></>
}
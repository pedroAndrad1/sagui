// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'
import 'react-tabs/style/react-tabs.scss';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp

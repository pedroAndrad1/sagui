// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-tabs/style/react-tabs.scss';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp

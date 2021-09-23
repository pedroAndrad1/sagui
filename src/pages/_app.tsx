// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-tabs/style/react-tabs.scss';
import '../styles/globals.scss'
import { UserContextProvider } from '../contexts/UserContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp

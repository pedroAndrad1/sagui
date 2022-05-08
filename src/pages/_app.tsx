// add bootstrap css
// import 'bootstrap/dist/css/bootstrap.css'
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-tabs/style/react-tabs.scss";
import "../styles/globals.scss";
import { UserContextProvider } from "../contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <ToastContainer
        closeButton={false}
        hideProgressBar={false}
        autoClose={5000}
        position="top-right"
      ></ToastContainer>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;

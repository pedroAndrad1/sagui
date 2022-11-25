// add bootstrap css
// import 'bootstrap/dist/css/bootstrap.css'
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.scss";
import { UserContextProvider } from "../contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <UserContextProvider>
        <ToastContainer
          closeButton={false}
          hideProgressBar={false}
          autoClose={5000}
          position="top-right"
        ></ToastContainer>
        <Component {...pageProps} />
      </UserContextProvider>
    </SessionProvider>
  );
}

export default MyApp;

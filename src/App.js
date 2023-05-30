import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MainNavigation } from "./Component/MainNavigation"
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { AuthWrapper } from "./Context/auth.context";

const App = () => {


  return (
    <BrowserRouter>
      <AuthWrapper>
        <ThemeProvider>
            {/* <div className="App"> */}
                <Header />
                <main>
                  <MainNavigation />
                </main>
                <Footer />
            {/* </div> */}
        <ToastContainer />
        </ThemeProvider>
      </AuthWrapper>
    </BrowserRouter>
  )
}

export default App;
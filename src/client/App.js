import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { store } from "./store";
import Navigation from "./components/Navigation";
// import Header from "./components/Header";
import Main from "./components/Main";
import EventDetails from "./components/EventDetails";
import ScrollToTop from "./components/ScrollToTop";
import EventForm from "./components/EventForm";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";


function App() {
    return(
        <Provider store={store}>
        <Router>
            <ScrollToTop />
            <Navigation />  
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/EventDetails" element={<EventDetails />} />
                <Route exact path="/AddEvent" element={<EventForm />} />
                <Route exact path="/Register" element={<RegistrationForm />} />
                <Route exact path="/Login" element={<LoginForm />} />
            </Routes>
        </Router>
        {/* <Header /> */}
        {/* <Main /> */}

        </Provider>
    );
}

export default App;
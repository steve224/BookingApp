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


function App() {
    return(
        <Provider store={store}>
        <Navigation />
        <Router>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/EventDetails" element={<EventDetails />} />
                <Route exact path="/AddEvent" element={<EventForm />} />
            </Routes>
        </Router>
        {/* <Header /> */}
        {/* <Main /> */}

        </Provider>
    );
}

export default App;
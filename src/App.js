import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navbar";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/notFound";
import Hotel from "./components/hotel";
import HotelsList from "./components/hotelsList";
import Search from "./components/search";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/hotels/:country/:id" component={Hotel} />
          <Route path="/hotels/:country" component={HotelsList} />
          <Route path="/search" component={Search} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/search" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

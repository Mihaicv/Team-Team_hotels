import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HotelsSuggestions from "./components/hotelSuggestions";
import HotelDetails from "./components/hotelDetails";
import AmenitiesInHotel from "./components/amenities";
import AmenitiesInRoom from "./components/amenitiesInRoom";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import Hotel from "./components/hotel";
import HotelsList from "./components/hotelsList";
import Search from "./components/search";
import Reviews from "./components/reviews";
import GuestReviewOverview from "./components/guestReviewOverview";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />

      <main className="container">
        <Switch>
          <Route path='/suggestions' component={HotelsSuggestions} />
          <Route path='/detail/:id' component={HotelDetails} />
          <Route path='/amenities/hotel/:id' component={AmenitiesInHotel} />
          <Route path='/amenities/room/:id' component={AmenitiesInRoom} />
          <Route path='/search/:country/:id/:hotelName' component={Hotel} />
          <Route path='/search/:country' component={HotelsList} />
          <Route path='/search' component={Search} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to='/search' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

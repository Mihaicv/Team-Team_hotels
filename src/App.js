import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navbar';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/notFound';
import Hotel from './components/hotel';
import HotelsList from './components/hotelsList';
// import HotelImages from "./components/hotelImages";
// import HotelsPage from "./components/context/hotelsPage";
// import HotelContext from "./components/context/hotelContext";
import Reviews from './components/reviews';
import GuestReviewOverview from './components/guestReviewOverview';

function App() {
  const [currentHotelId, setCurrentHotel] = useState([]);

  function handleSetCurrentHotelId(id) {
    setCurrentHotel(id);
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className='container'>
        <Switch>
          <Route path='/hotel/:id' component={Hotel} />
          <Route path='/reviews/:id' component={Reviews} />
          <Route path='/ratings/:id' component={GuestReviewOverview} />
          {/* <Route path="/search" component={Search} /> */}
          <Route path='/hotels' component={HotelsList} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to='/context' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

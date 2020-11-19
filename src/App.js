import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navbar';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import HotelsSuggestions from './components/hotelSuggestions';
import HotelDetails from './components/hotelDetails';
import AmenitiesInHotel from './components/amenities';

import AmenitiesInRoom from './components/amenitiesInRoom';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />

      <main className='container'>
        <Switch>
          <Route path='/suggestions' component={HotelsSuggestions} />
          <Route path='/detail' component={HotelDetails} />
          <Route path='/amenities/In the hotel' component={AmenitiesInHotel} />
          <Route path='/amenities/In the room' component={AmenitiesInRoom} />
          <Redirect from='/' exact to='/' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

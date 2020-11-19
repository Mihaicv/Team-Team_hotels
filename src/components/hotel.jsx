import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HotelImages from './hotelImages';
import { Link } from 'react-router-dom';
import GuestReviewOverview from './guestReviewOverview';

function Hotel(props) {
  let params = useParams();

  return (
    <div>
      <div>
        <h1>Hotel Images - {params.id} </h1>
        <Link to={`/reviews/${params.id}`}>Reviews</Link>
        <Link to={`/ratings/${params.id}`}>Hotel ratings</Link>
        <HotelImages {...params.id} />
      </div>
      <div>
        <h2>Details</h2>
      </div>
    </div>
  );
}

export default Hotel;

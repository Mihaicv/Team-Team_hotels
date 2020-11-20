import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HotelImages from './hotelImages';

function Hotel(props) {
  let params = useParams();

  return (
    <div>
      <div>
        <Link to={`/detail/${params.id}`}>
          <h5>Details</h5>
        </Link>
        <Link to={`/reviews/${params.id}`}>
          <h5>Reviews</h5>
        </Link>
      </div>
      <div>
        <h3>{params.hotelName}</h3>

        <div>
          <Link to={`/ratings/${params.id}`}>Hotel ratings</Link>
        </div>
        <div>
          <Link to={`/reviews/${params.id}`}></Link>
        </div>
        <div>
          <Link to={`/detail/${params.id}`}></Link>
        </div>
        <HotelImages {...params} />
      </div>
    </div>
  );
}

export default Hotel;

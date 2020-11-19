import React from "react";
import { Link, useParams } from "react-router-dom";
import HotelImages from "./hotelImages";

function Hotel(props) {
  let params = useParams();

  return (
    <div className="jumbotron">
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

        <td>
          <Link to={`/ratings/${params.id}`}>Hotel ratings</Link>
        </td>
        <td>
          <Link to={`/reviews/${params.id}`}></Link>
        </td>
        <td>
          <Link to={`/detail/${params.id}`}></Link>
        </td>
        <HotelImages {...params} />
      </div>
    </div>
  );
}

export default Hotel;

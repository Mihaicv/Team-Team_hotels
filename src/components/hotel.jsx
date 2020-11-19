import React from "react";
import { Link, useParams } from "react-router-dom";

import HotelImages from "./hotelImages";

function Hotel() {
  let params = useParams();

  return (
    <div>
      <div>
        <Link to={`/detail/${params.id}`}>
          {" "}
          <h5>Details</h5>
        </Link>
      </div>
      <div>
        <h3>{params.hotelName}</h3>
        <HotelImages {...params} />
      </div>
    </div>
  );
}

export default Hotel;

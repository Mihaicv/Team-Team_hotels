import React from "react";
import { useParams } from "react-router-dom";

import HotelImages from "./hotelImages";

function Hotel() {
  let params = useParams();

  return (
    <div>
      <div>
        <h3>{params.hotelName}</h3>
        <HotelImages {...params} />
      </div>
      <div>
        <h2>Details</h2>
      </div>
    </div>
  );
}

export default Hotel;

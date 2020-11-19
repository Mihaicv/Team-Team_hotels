import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HotelImages from "./hotelImages";

function Hotel() {
  let params = useParams();

  console.log(params.id + " in hotel");
  return (
    <div>
      <div>
        <h1>Hotel Images - {params.id} </h1>
        <HotelImages {...params.id} />
      </div>
      <div>
        <h2>Details</h2>
      </div>
    </div>
  );
}

export default Hotel;

import React, { useEffect, useState } from "react";
import http from "./common/httpService";
import config from "./common/config.json";
import { Link } from "react-router-dom";
import Hotel from "./hotel";

function HotelsList(props) {
  const [hotelsList, setHotelsList] = useState([]);
  const [imageSize, setImageSize] = useState(["d"]);

  useEffect(() => {
    let data = {
      headers: config.headers.headers,
      params: config.query.query,
    };

    async function getHotelsList() {
      const result = await http.get(
        config.apiEndpoint + "/suggest/v1.7/json",
        data
      );
      let obj = await result;

      setHotelsList(obj.data.suggestions[3].entities);
    }

    getHotelsList();
  }, [hotelsList, imageSize]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Hotel</th>
          </tr>
        </thead>
        <tbody>
          {hotelsList.map((hotel) => (
            <tr key={hotel.destinationId}>
              <td>
                <h2>hotel</h2>
                <Link to={`/hotel/${hotel.destinationId}`} {...props}>
                  <span id={hotel.destinationId} {...props}>
                    Hotel - {hotel.destinationId}
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HotelsList;

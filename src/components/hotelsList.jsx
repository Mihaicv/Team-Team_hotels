import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "./common/httpService";
import config from "./common/config.json";
import { Link } from "react-router-dom";

function HotelsList(props) {
  const [hotelsList, setHotelsList] = useState([]);
  const [imageSize, setImageSize] = useState(["d"]);
  let country = props.match.params.country;
  
  let data = {
    headers: config.headers.headers,
    params: config.query.query,
  };

  data.params.query = country;

  useEffect(() => {
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
            <th>
              Popuplar destinations in <strong>{country}</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {hotelsList.map((hotel) => (
            <tr key={hotel.destinationId}>
              <td>
                <h4>Hotel</h4>
                <Link
                  to={`/search/${country}/${hotel.destinationId}/${hotel.name}`}
                  {...props}
                >
                  <span
                    id={hotel.destinationId}
                    hotelName={hotel.name}
                    {...props}
                  >
                    {hotel.name}
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

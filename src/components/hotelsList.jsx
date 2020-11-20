import React, { useEffect, useState } from 'react';
import http from './common/httpService';
import config from './common/config.json';
import { Link } from 'react-router-dom';

function HotelsList(props) {
  const [hotelsList, setHotelsList] = useState([]);
  const [imageSize, setImageSize] = useState(['d']);
  let country = props.match.params.country;

  let data = {
    headers: config.headers.headers,
    params: config.query.query,
  };

  data.params.query = country;

  useEffect(() => {
    async function getHotelsList() {
      const result = await http.get(
        config.apiEndpoint + '/suggest/v1.7/json',
        data
      );
      let obj = await result;

      setHotelsList(obj.data.suggestions[3].entities);
    }

    getHotelsList();
  }, []);

  return (
    <div className="container">
      <h3>popuplar destinations in {country}</h3>

      {hotelsList.map((hotel) => (
        <div className="row" key={hotel.destinationId}>
          <div className="col-sm">
            <Link
              to={`/search/${country}/${hotel.destinationId}/${hotel.name}`}
            >
              <span>{hotel.name}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelsList;

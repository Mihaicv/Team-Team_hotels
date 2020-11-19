import React, { useEffect, useState } from "react";
import http from "./common/httpService";
import config from "./common/config.json";

import ImageComponent from "./imageComponent";

function HotelsSuggestions(props) {
  const [hotelsSuggestions, setHotelsSuggestions] = useState([]);

  useEffect(() => {
    async function getHotelsSuggestions() {
      const result = await http.get(config.apiEndpoint, config.headers);
      let obj = await result;
      let size = "d";
      obj = obj.data.hotelImages.map((i) => ({
        id: i.imageId,
        url: i.baseUrl.replace(/^(.+?)_.+(\.jpg)/gi, `$1_${size}$2`),
      }));
      setHotelsSuggestions(obj);
    }

    getHotelsSuggestions();
  }, [hotelsSuggestions]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Hotel</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {hotelsSuggestions.map((imag) => (
            <tr key={imag.id}>
              <td>
                <ImageComponent url={imag.url} {...props} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HotelsSuggestions;

import React, { useEffect, useState } from 'react';
import http from './common/httpService';
import configDetails from './common/configDetails.json';
import { Link } from 'react-router-dom';
import Amenities from './amenities';

function HotelDetails() {
  const [detailsHotel, setDetailsHotel] = useState([]);

  useEffect(() => {
    let data = {
      headers: configDetails.headers.headers,
      params: configDetails.query.query,
    };

    async function getDetailHotel() {
      const result = await http.get(configDetails.apiEndpoint, data);
      let obj = result.data.data.body.amenities;
      // console.log(result.data.data.body.amenities);
     

      setDetailsHotel(obj);
    }

    getDetailHotel();
  }, [detailsHotel]);

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Amenities</th>
        
          </tr>
        </thead>
        <tbody>
          {detailsHotel.map((del) => (
            <tr key={del.heading}>
              <td>
               <Link to={`/amenities/${del.heading}`} > <h3>{del.heading}</h3></Link>
             
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HotelDetails;

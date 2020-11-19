/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import http from './common/httpService';
import configDetails from './common/configDetails.json';

export default function Amenities(props) {
  let params = useParams();
  console.log(params);

  const [listAmenities, setListAmenities] = useState([]);

  useEffect(() => {
    let data = {
      headers: configDetails.headers.headers,
      params: configDetails.query.query,
    };

    async function getDetail() {
      const result = await http.get(configDetails.apiEndpoint, data);
      let obj = result.data.data.body.amenities[0].listItems[0];
    //   console.log(result.data.data.body.amenities[0].listItems[0]);

      setListAmenities(obj);
    }

    getDetail();
  }, [listAmenities]);

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Amenities </th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(listAmenities).map((key) => {
            if (key !== 'heading')
              return (
                <tr>
                  <td>
                    <h3 key={listAmenities[key]}>{listAmenities[key]}</h3>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
}

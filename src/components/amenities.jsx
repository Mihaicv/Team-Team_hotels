/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import http from './common/httpService';
import configDetails from './common/configDetails.json';

export default function AmenitiesInHotel(props) {
  const [listAmenities, setListAmenities] = useState([]);

  useEffect(() => {
    let data = {
      headers: configDetails.headers.headers,
      params: configDetails.query.query,
    };

    async function getDetail() {
      const result = await http.get(configDetails.apiEndpoint+props.match.params.id, data);
      let obj = result.data.data.body.amenities[0].listItems[0];
      // console.log(result.data.data.body.amenities[0].listItems[0]);

      setListAmenities(obj);
    }

    getDetail();
  }, [listAmenities]);

  return (
    <div>
      <table className='table'>
        <thead className="thead-dark">
          <tr>
            <th>Amenities {listAmenities.heading} </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td scope="row">
              <ul className="list-group">
                {Object.keys(listAmenities).map((key) => {
                  if (key !== 'heading')
                    return listAmenities[key].map((x) => <li className="list-group-item">{x}</li>);
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import http from './common/httpService';
import configReviews from './common/configReview.json';
import { useParams } from 'react-router';

const GuestReviewOverview = (props) => {
  const [guestReviewOverview, setGuestReviewOverview] = useState([]);

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    let data = {
      headers: configReviews.headers.headers,
      params: configReviews.query.query,
    };

    async function getReviews() {
      const result = await http.get(
        configReviews.apiEndpoint + `/${id}/reviews`,
        data
      );
      setGuestReviewOverview(
        result.data.reviewData.guestReviewGroups.guestReviewOverview
      );
    }

    getReviews();
  }, [guestReviewOverview, id]);

  return (
    <div className='jumbotron'>
      <table className='table'>
      <thead className="thead-dark">
          <tr>
            <th>Notes </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
          <tbody >
          <tr ><br/>
              <tr style={{borderBottomStyle: "solid"}}>Cleanliness {guestReviewOverview.cleanliness}</tr><br/> 
              <tr style={{borderBottomStyle: "solid"}}>Hotel Condition {guestReviewOverview.formattedHotelCondition}</tr><br/>
              <tr style={{borderBottomStyle: "solid"}}>Hotel Service {guestReviewOverview.formattedHotelService}</tr><br/>
              <tr style={{borderBottomStyle: "solid"}}>Neighbourhood {guestReviewOverview.formattedNeighbourhood}</tr><br/>
              <tr style={{borderBottomStyle: "solid"}}>Overall {guestReviewOverview.formattedOverall}</tr><br/>
              <tr style={{borderBottomStyle: "solid"}}>RoomComfort {guestReviewOverview.formattedRoomComfort}</tr><br/>
              </tr>
          </tbody>
      </table>
     </div>
  );
};

export default GuestReviewOverview;

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
  }, []);

  return (
    <div>
      <p>Cleanliness {guestReviewOverview.cleanliness}</p>
      <p>Hotel Condition {guestReviewOverview.formattedHotelCondition}</p>
      <p>Hotel Service {guestReviewOverview.formattedHotelService}</p>
      <p>Neighbourhood {guestReviewOverview.formattedNeighbourhood}</p>
      <p>Overall {guestReviewOverview.formattedOverall}</p>
      <p>RoomComfort {guestReviewOverview.formattedRoomComfort}</p>
    </div>
  );
};

export default GuestReviewOverview;

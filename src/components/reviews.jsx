import React, { useEffect, useState } from 'react';
import http from './common/httpService';
import configReviews from './common/configReview.json';
import { useParams } from 'react-router';

const Reviews = (props) => {
  const [reviews, setReview] = useState([]);

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
      setReview(
        result.data.reviewData.guestReviewGroups.guestReviews[0].reviews
      );
    }

    getReviews();
  }, [reviews, id]);

  return (
    <div>
      <p>Reviews</p>
      {reviews.map((r, i) => (
        <ul key={i}>{r.summary}</ul>
      ))}
    </div>
  );
};

export default Reviews;

import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';

function Rating({ rating, numberOfReviews }) {
  return (
    <Wrapper>
      {rating >= 1 ? (
        <FaStar />
      ) : rating >= 0.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating >= 2 ? (
        <FaStar />
      ) : rating >= 1.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating >= 3 ? (
        <FaStar />
      ) : rating >= 2.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating >= 4 ? (
        <FaStar />
      ) : rating >= 3.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating === 5 ? (
        <FaStar />
      ) : rating >= 4.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      <span> {numberOfReviews} reviews</span>
    </Wrapper>
  );
}

export default Rating;

const Wrapper = styled.main`
  svg {
    fill: gold;
    font-size: 12px;
  }
`;

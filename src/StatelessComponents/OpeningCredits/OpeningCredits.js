import React from 'react';
import PropTypes from 'prop-types';

const OpeningCredits = ({ openingCrawl }) => {
  if (openingCrawl === null) {
  return (
    <div>
      <p>Loading...</p>
    </div>
  )
} else {
  
  return(
    <div>
      <p>{openingCrawl.openingText}</p>
      <p>{openingCrawl.title}</p>
      <p>{openingCrawl.releaseDate}</p>
    </div>
  )
}
}

export default OpeningCredits;



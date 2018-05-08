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
  let randomIndex = Math.floor(Math.random() * Math.floor(openingCrawl.length))
  console.log(randomIndex)
  return(
    <div>
      <p>{openingCrawl[randomIndex].openingText}</p>
      <p>{openingCrawl[randomIndex].title}</p>
      <p>{openingCrawl[randomIndex].releaseDate}</p>
    </div>
  )
}
}

export default OpeningCredits;



import React from 'react';
import PropTypes from 'prop-types';
import loadingGif from "../../images/loading.gif"
import './OpeningCredits.css'

const OpeningCredits = ({ openingCrawl }) => {
  if (openingCrawl === null) {
  return (
      <img className='loading' src={loadingGif} />
  )
} else {
  
  return(
    <div className='opening-credits'>
      <p className='marquee'>
        <span>{openingCrawl.openingText}<span>{openingCrawl.title}</span><span>{openingCrawl.releaseDate}</span></span>
      </p>    
    </div>
  )
}
}

export default OpeningCredits;



import React from 'react';

function BookContainer({ imgSrc, altText, title }) {
  return (
    <div className="bookContainer">
      <img src={imgSrc} alt={altText} />
      <p>{title}</p>
    </div>
  );
}

export default BookContainer;


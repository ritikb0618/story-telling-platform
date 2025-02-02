import React from 'react';

const Content = ({ title, author, link, imgUrl }) => {
  const handleOnClick = (link) => {
    
  };

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <button onClick={() => handleOnClick(link)}>Read More</button>
      </div>
      <img src={imgUrl} alt="Content" />
    </div>
  );
};

export default Content;

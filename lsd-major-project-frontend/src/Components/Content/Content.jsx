import React from 'react';
import './Content.css';
const Content = ({ Title, Author, Image, Link }) => {
  const handleOnClick = () => {
    if (Link) {
      window.open(Link, '_blank');
    }
  };

  return (
    <div className='container'>
      <div className='Info'>
        <h3>{Title}</h3>
        <h4>By: {Author}</h4>
        <button onClick={handleOnClick}>Read More</button>
      </div>
      <img src={Image} alt="Content"/>
    </div>
  );
};

export default Content;

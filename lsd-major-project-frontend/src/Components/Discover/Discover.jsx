import React, { useState } from 'react';
import './Discover.css';
import { useNavigate } from 'react-router-dom';
import {Content} from '../index';

const Discover = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'test', link: '/test' },
    { name: 'test2', link: '/test2' },
    { name: 'test3', link: '/test3' },
    { name: 'test4', link: '/test4' }
  ];

  const Sort = [
    { name: 'Popularity' },
    { name: 'Recent' },
    { name: 'Tags' },
  ];

  const handleOnclick = (link) => {
    navigate(link);
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="Discover">
      <div className='First-header'>
        <h1>Discover</h1>
        <div className='Categories'>
          {categories.map((category, index) => (
            <div key={index}>
              <button onClick={() => handleOnclick(category.link)}>{category.name}</button>
            </div>
          ))}
        </div>
      </div>
      <div className='Second-header'>
        <h2>Sort By</h2>
        <div>
          {Sort.map((sort, index) => (
            <div key={index}>
              <button>{sort.name}</button>
            </div>
          ))}
        </div>
        <div className='Search-Bar'>
          <input
            type='text'
            value={searchTerm}
            onChange={handleOnChange}
            placeholder='Search for stories, jokes, and more...'
          />
        </div>
        <div className='Filter-Bar'>
          {/* You can render Content dynamically based on your data */}
          <Content 
            title="Example Title" 
            author="Author Name" 
            link="/example" 
            imgUrl="https://via.placeholder.com/150"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;

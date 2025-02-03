import React, { useState, useEffect } from 'react';
import './Discover.css';
import { useNavigate } from 'react-router-dom';
import { Content } from '../index';

const Discover = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/data');
        if (!response.ok) {
          throw new Error(`HTTP Error status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []); 

  const categories = [
    { name: 'test', link: '/test' },
    { name: 'test2', link: '/test2' },
    { name: 'test3', link: '/test3' },
    { name: 'test4', link: '/test4' }
  ];

  const sortOptions = [
    { name: 'Popularity' },
    { name: 'Recent' },
    { name: 'Tags' },
  ];

  const handleOnclick = (link) => {
    navigate(link);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="Discover">
      <div className='First-header'>
        <h1>Discover</h1>
        <div className='Categories'>
          {categories.map((category, index) => (
            <button key={index} onClick={() => handleOnclick(category.link)}>
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className='Second-header'>
        <h2>Sort By</h2>
        <div>
          {sortOptions.map((sort, index) => (
            <button key={index}>{sort.name}</button>
          ))}
        </div>
        
        <div className='Search-Bar'>
          <input
            type='text'
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder='Search for stories, jokes, and more...'
          />
        </div>
        
        <div className='Filter-Bar'>
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <Content 
                key={index}
                title={item.name}
                author={item.author}
                link={`/content/${item.id}`}
                imgUrl={item.imageUrl || "https://via.placeholder.com/150"}
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;

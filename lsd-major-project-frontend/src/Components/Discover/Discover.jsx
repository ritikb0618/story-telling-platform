import React, { useState, useEffect } from 'react';
import './Discover.css';
import { useNavigate } from 'react-router-dom';
import {Content} from '../index'; 

const Discover = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data');
        if (!response.ok) {
          throw new Error(`HTTP Error status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(false); // Fix: Update loading state
      } catch (err) {
        setError(err.message); // Fix: Set error message
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading items...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const filteredData = data.filter((item) =>
    item.Title && typeof item.Title === "string" &&
    item.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const categories = [
    { name: 'All', link: '/test' },
    { name: 'Story', link: '/test2' },
    { name: 'Jokes', link: '/test3' },
    { name: 'Fan-Fiction', link: '/test4' },
    { name: 'Poetry', link: '/test3' },
    { name: 'Romance', link: '/test3' },
    { name: 'Fantasy', link: '/test3' },
    { name: 'Horror', link: '/test3' },
    { name: 'Sci-Fi', link: '/test3' },
    { name: 'Mystery', link: '/test3' },
  ];

  const sortOptions = [
    { name: 'Popularity' },
    { name: 'Recent' },
    { name: 'Tags' },
  ];

  const handleOnclick = (link) => {
    navigate(link);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);


  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

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
          {currentItems.map((item) => (
            <Content key={item.id} {...item} /> 
          ))}
        </div>
        <div>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
      </div>
    </div>
  );
};

export default Discover;

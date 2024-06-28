import React, { useState } from 'react';

const FetchApi = () => {
  const [content, setContent] = useState(null); 
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchData = async () => {
    if (inputValue === 'facebook') {
    try {
     
      const response = await fetch(`https://api.github.com/users/facebook`);
      const data = await response.json();
      setContent(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }}; 

  return (
    <div>
      <input type="text" placeholder='e.g.facebook' value={inputValue} onChange={handleChange}/>
      <button onClick={fetchData}>Click me!</button>
      {content && (
        <div>
          <img src={content.avatar_url} alt="Avatar" width="80" />
          <p>Username: {content.name}</p>
         <p>Location: {content.location}</p>
         <p>Bio: {content.bio}</p>
        </div>
      )}
    </div>
  );
};

export default FetchApi;

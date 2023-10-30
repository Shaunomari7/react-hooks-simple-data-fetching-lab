import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Send a fetch request to the dog API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Update the dogImage state with the received data
        setDogImage(data.message);
        setIsLoading(false); // Set isLoading to false when data is received
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setIsLoading(false); // Set isLoading to false in case of an error
      });
  }, []); // Empty dependency array to run this effect only once

  return (
    <div>
      <h1>Random Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;

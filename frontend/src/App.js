import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
      axios.get('http://localhost:8000/api/data')
      .then(response => {
          setData(response.data.message);
      });
  }, []);

  return (
      <div className="App">
          <h1>{data}</h1>
      </div>
  );
}

export default App;
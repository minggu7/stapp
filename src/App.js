import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Spring Boot API 요청 (원격 서버로 요청)
    fetch('http://115.68.179.98/api/hello')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message ? message : "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;
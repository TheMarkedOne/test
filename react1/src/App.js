import React from 'react';

function App() {
  const handleRedirect = () => {
    window.location.href = 'http://172.16.15.172:8000';
  };

  return (
    <div>
      <h1>Welcome to Your App</h1>
      <button onClick={handleRedirect}>
        Redirect
      </button>
    </div>
  );
}

export default App;

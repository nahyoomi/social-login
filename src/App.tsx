// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login'; // Asegúrate de que la ruta sea correcta

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h1>My React App</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h2>Welcome Home</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
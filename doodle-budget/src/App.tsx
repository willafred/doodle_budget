import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="dashboard-container">
      <div className="card-row">
        <div className="card half">Pie Chart</div>
        <div className="card half">Card 2</div>
      </div>
      <div className="card full">Card 3</div>
      <div className="card full">Card 4</div>
    </div>
  );
}
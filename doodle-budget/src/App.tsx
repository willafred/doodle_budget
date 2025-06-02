import React from 'react';
import doodie from './assets/doodie.png';
import './App.css';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={doodie} alt="Doodie logo" style={styles.image} />
        <h1 style={styles.title}>Welcome to Doodle Budget!</h1>
      </div>
      <p> Who are you selecting?.</p>
      
      <button className="claire-button" onClick={() => alert('Welcome, Claire!')}>Claire</button>
      <button className="wilf-button" onClick={() => alert('Welcome, Wilfred!')}>Wilfred</button>
      <button className="woo-button" onClick={() => alert('Welcome, the Woos!')}>Wilfred + Claire</button>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
};

export default App;
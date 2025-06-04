import React from 'react';
import doodie from './assets/doodie.png';
import './App.css';
import coverimage from './assets/cover.jpg';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}> 
        <div style={styles.header}>
          <img src={doodie} alt="Doodie logo" className="bunny-image" style={styles.image} />
          <h1 style={styles.title}>Welcome to Doodle Budget!</h1>
          <p style={styles.tagline}>Track your spending with Doodie!</p>
        </div>

        <p style={styles.subtitle}>Whose account would you like to access?</p>

        <div style={styles.buttonContainer}>
          <button className="claire-button" onClick={() => alert('Welcome, Claire!')}>
            Claire 🐰
          </button>
          <button className="wilf-button" onClick={() => alert('Welcome, Wilfred!')}>
            Wilfred 🧸
          </button>
          <button className="woo-button" onClick={() => alert('Welcome, the Woos!')}>
            Wilfred + Claire 💛
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: 'linear-gradient(to bottom right, #fce3ec, #d8eafc)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '10rem',
    backgroundImage: `url(${coverimage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  card: {
    background: 'linear-gradient(to bottom right, #ffffff, #e3f0ff)',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
  },
  header: {
    marginBottom: '1.5rem',
  },
  image: {
    height: '200px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  tagline: {
    fontSize: '1rem',
    color: '#555',
    marginTop: 0,
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 500,
    marginBottom: '1rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
};

export default App;
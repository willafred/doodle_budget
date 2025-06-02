import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <h1>Hello, React + TypeScript!</h1>
      <p>This is a simple starter interface.</p>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
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
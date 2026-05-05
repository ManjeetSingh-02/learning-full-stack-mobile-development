import { useState } from 'react';
import useTheme from '../hooks/useTheme';

export default function Counter({ darkMode }) {
  const [count, setCount] = useState(0);

  const containerStyle = {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkMode ? '#000' : '#fff',
    color: darkMode ? '#fff' : '#000',
    transition: 'background-color 200ms ease, color 200ms ease',
  };

  const btnStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '1px solid grey',
    cursor: 'pointer',
    background: darkMode ? '#222' : '#eee',
    color: darkMode ? '#fff' : '#000',
  };

  return (
    <div style={containerStyle}>
      <button
        style={btnStyle}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <h1>{count}</h1>
      <button
        style={btnStyle}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

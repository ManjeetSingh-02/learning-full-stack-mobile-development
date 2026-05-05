import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        alignItems: 'center',
        background: 'linear-gradient(135deg, #101828 0%, #1d2939 100%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '20px',
        boxShadow: '0 20px 45px rgba(15, 23, 42, 0.25)',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'space-between',
        margin: '2rem auto',
        maxWidth: '420px',
        padding: '1.25rem 1.5rem',
        width: '100%',
      }}
    >
      <button
        onClick={() => setCount(count - 1)}
        style={{
          alignItems: 'center',
          background: '#f97316',
          border: 'none',
          borderRadius: '999px',
          color: '#fff',
          cursor: 'pointer',
          display: 'inline-flex',
          fontSize: '1.5rem',
          fontWeight: 700,
          height: '3rem',
          justifyContent: 'center',
          width: '3rem',
        }}
        aria-label="Decrease count"
      >
        -
      </button>

      <div style={{ color: '#f8fafc', textAlign: 'center' }}>
        <p
          style={{
            margin: 0,
            opacity: 0.75,
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}
        >
          Counter
        </p>
        <h1 style={{ margin: '0.25rem 0 0', fontSize: '2.5rem', lineHeight: 1 }}>{count}</h1>
      </div>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          alignItems: 'center',
          background: '#38bdf8',
          border: 'none',
          borderRadius: '999px',
          color: '#082f49',
          cursor: 'pointer',
          display: 'inline-flex',
          fontSize: '1.5rem',
          fontWeight: 700,
          height: '3rem',
          justifyContent: 'center',
          width: '3rem',
        }}
        aria-label="Increase count"
      >
        +
      </button>
    </div>
  );
}

import Counter from './components/Counter';
import Heading from './components/Heading';
import useTheme from './hooks/useTheme';

export default function App() {
  const [darkMode, toggleTheme] = useTheme();

  const appStyle = {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: darkMode ? '#000' : '#fff',
    color: darkMode ? '#fff' : '#000',
    transition: 'background-color 200ms ease, color 200ms ease',
  };

  const btnStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '1px solid grey',
    background: darkMode ? '#222' : '#eee',
    color: darkMode ? '#fff' : '#000',
    cursor: 'pointer',
  };

  return (
    <div style={appStyle}>
      <button
        type="button"
        onClick={toggleTheme}
        style={btnStyle}
      >
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>

      <Heading
        title="Welcome"
        desc="This is welcome message"
      />
      <Heading
        title="Hello World"
        desc="This is hello world message"
      />

      <Counter darkMode={darkMode} />
    </div>
  );
}

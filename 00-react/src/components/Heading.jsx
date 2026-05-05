export default function Heading({ title, desc }) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '6px',
    border: '1px solid grey',
  };

  return (
    <div style={containerStyle}>
      <h1>{title}</h1>
      <h4>{desc}</h4>
    </div>
  );
}

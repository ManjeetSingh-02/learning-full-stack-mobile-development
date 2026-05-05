export default function Heading({ title, desc }) {
  return (
    <article
      style={{
        background: 'rgba(15, 23, 42, 0.72)',
        border: '1px solid rgba(148, 163, 184, 0.18)',
        borderRadius: '20px',
        boxShadow: '0 18px 40px rgba(2, 6, 23, 0.24)',
        padding: '1.5rem 1.75rem',
      }}
    >
      <p
        style={{
          color: '#38bdf8',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          margin: 0,
          textTransform: 'uppercase',
        }}
      >
        Heading
      </p>
      <h1
        style={{
          color: '#f8fafc',
          fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
          lineHeight: 1.05,
          margin: '0.5rem 0 0',
        }}
      >
        {title}
      </h1>
      <h4
        style={{
          color: '#cbd5e1',
          fontSize: '1rem',
          fontWeight: 400,
          lineHeight: 1.6,
          margin: '0.75rem 0 0',
        }}
      >
        {desc}
      </h4>
    </article>
  );
}

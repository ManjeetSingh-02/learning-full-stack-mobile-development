import Counter from './components/Counter';
import Heading from './components/Heading';

export default function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        overflow: 'hidden',
        padding: 'clamp(1.25rem, 3vw, 2.5rem)',
        position: 'relative',
        background:
          'radial-gradient(circle at top left, rgba(56, 189, 248, 0.2), transparent 34%), radial-gradient(circle at top right, rgba(249, 115, 22, 0.18), transparent 28%), linear-gradient(180deg, #020617 0%, #0f172a 48%, #111827 100%)',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '999px',
          filter: 'blur(2px)',
          height: '14rem',
          left: '-5rem',
          position: 'absolute',
          top: '-4rem',
          width: '14rem',
        }}
      />
      <div
        style={{
          background: 'rgba(56, 189, 248, 0.12)',
          borderRadius: '999px',
          bottom: '4rem',
          filter: 'blur(2px)',
          height: '12rem',
          position: 'absolute',
          right: '-3rem',
          width: '12rem',
        }}
      />

      <section
        style={{
          margin: '0 auto',
          maxWidth: '760px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            marginBottom: '1.5rem',
            maxWidth: '620px',
          }}
        >
          <p
            style={{
              color: '#38bdf8',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            React Refresher
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '1rem',
          }}
        >
          <Heading
            title="Welcome"
            desc="This is welcome message"
          />
          <Heading
            title="Hello World"
            desc="This is hello world message"
          />

          <Counter />
        </div>
      </section>
    </main>
  );
}

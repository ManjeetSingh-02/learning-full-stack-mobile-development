import { useState } from 'react';

export default function GithubProfile({ darkMode }) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [value, setValue] = useState('');

  const colors = {
    page: darkMode ? '#08111f' : '#f3f7ff',
    card: darkMode ? 'rgba(11, 18, 32, 0.92)' : '#ffffff',
    border: darkMode ? 'rgba(148, 163, 184, 0.2)' : 'rgba(15, 23, 42, 0.08)',
    text: darkMode ? '#e2e8f0' : '#0f172a',
    muted: darkMode ? '#94a3b8' : '#475569',
    input: darkMode ? '#0f172a' : '#f8fafc',
    accent: darkMode ? '#7dd3fc' : '#0369a1',
    accentSoft: darkMode ? 'rgba(125, 211, 252, 0.12)' : 'rgba(3, 105, 161, 0.08)',
  };

  const containerStyle = {
    width: 'min(100%, 760px)',
    padding: '1.5rem',
    color: colors.text,
  };

  const cardStyle = {
    display: 'grid',
    gap: '1.25rem',
    padding: '1.5rem',
    borderRadius: '24px',
    border: `1px solid ${colors.border}`,
    background: colors.card,
    boxShadow: darkMode ? '0 24px 60px rgba(0, 0, 0, 0.35)' : '0 24px 60px rgba(15, 23, 42, 0.08)',
    backdropFilter: 'blur(16px)',
  };

  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const titleStyle = {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    lineHeight: 1.1,
    margin: 0,
  };

  const subtitleStyle = {
    margin: 0,
    color: colors.muted,
    lineHeight: 1.5,
  };

  const formStyle = {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  };

  const inputStyle = {
    flex: '1 1 260px',
    minWidth: 0,
    padding: '0.95rem 1rem',
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    background: colors.input,
    color: colors.text,
    outline: 'none',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '0.95rem 1.25rem',
    borderRadius: '16px',
    border: 'none',
    background: `linear-gradient(135deg, ${colors.accent}, ${darkMode ? '#00425e' : '#0284c7'})`,
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 700,
    letterSpacing: '0.01em',
    boxShadow: `0 12px 24px ${colors.accentSoft}`,
  };

  const contentStyle = {
    display: 'grid',
    gap: '1.25rem',
  };

  const profileTopStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '1rem',
    alignItems: 'center',
  };

  const avatarStyle = {
    width: '96px',
    height: '96px',
    borderRadius: '24px',
    objectFit: 'cover',
    border: `3px solid ${colors.border}`,
  };

  const nameStyle = {
    margin: 0,
    fontSize: '1.4rem',
  };

  const handleStyle = {
    margin: '0.25rem 0 0',
    color: colors.accent,
    fontWeight: 600,
  };

  const bioStyle = {
    margin: '0.75rem 0 0',
    color: colors.muted,
    lineHeight: 1.6,
  };

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '0.75rem',
  };

  const statStyle = {
    padding: '1rem',
    borderRadius: '18px',
    background: colors.accentSoft,
    border: `1px solid ${colors.border}`,
  };

  const statLabelStyle = {
    margin: 0,
    fontSize: '0.82rem',
    color: colors.muted,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  };

  const statValueStyle = {
    margin: '0.35rem 0 0',
    fontSize: '1.5rem',
    fontWeight: 700,
  };

  const loadingStyle = {
    margin: 0,
    color: colors.muted,
  };

  async function fetchProfile(username) {
    setLoading(true);
    setProfile(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (response.status !== 200) alert(data.message);
      else setProfile(data);
    } catch {
      alert('Failed to fetch profile');
      setValue('');
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return alert('Please enter a GitHub username');
    fetchProfile(value);
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>GitHub Profile Explorer</h2>
          <p style={subtitleStyle}>
            Search for any public GitHub account and get a compact overview of their profile.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={formStyle}
        >
          <input
            style={inputStyle}
            type="text"
            name="username"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter GitHub username"
          />
          <button
            type="submit"
            style={buttonStyle}
            disabled={loading}
          >
            {loading ? 'Fetching...' : 'Fetch Profile'}
          </button>
        </form>

        {loading && <p style={loadingStyle}>Fetching profile...</p>}

        {profile && (
          <div style={contentStyle}>
            <div style={profileTopStyle}>
              <img
                src={profile.avatar_url}
                alt={`${profile.login} avatar`}
                style={avatarStyle}
              />

              <div>
                <h3 style={nameStyle}>{profile.name}</h3>
                <a
                  href={profile.html_url}
                  target="_blank"
                  style={handleStyle}
                >
                  @{profile.login}
                </a>
                {profile.bio && <p style={bioStyle}>{profile.bio}</p>}
              </div>
            </div>

            <div style={statsStyle}>
              <div style={statStyle}>
                <p style={statLabelStyle}>Followers</p>
                <p style={statValueStyle}>{profile.followers}</p>
              </div>
              <div style={statStyle}>
                <p style={statLabelStyle}>Following</p>
                <p style={statValueStyle}>{profile.following}</p>
              </div>
              <div style={statStyle}>
                <p style={statLabelStyle}>Repos</p>
                <p style={statValueStyle}>{profile.public_repos}</p>
              </div>
              <div style={statStyle}>
                <p style={statLabelStyle}>Gists</p>
                <p style={statValueStyle}>{profile.public_gists}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

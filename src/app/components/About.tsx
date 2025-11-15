export default function About() {
  return (
    <section id="about" style={{
      padding: '32px 48px',
      minHeight: '100%',
      background: '#2d2d30',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'auto'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#60a5fa',
        margin: '0 0 20px 0'
      }}>
        About Me
      </h2>
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '16px'
        }}>
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '12px',
              marginTop: 0,
              color: '#e5e7eb'
            }}>
              Senior Software Engineer
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#d1d5db',
              lineHeight: '1.6',
              marginBottom: '12px',
              margin: '0 0 12px 0'
            }}>
              With 4+ years of experience in Backend Development, I specialize in building 
              scalable applications using modern technologies. My expertise spans across Node.js, 
              React, TypeScript, Python, and cloud platforms.
            </p>
            <p style={{
              fontSize: '14px',
              color: '#d1d5db',
              lineHeight: '1.6',
              margin: 0
            }}>
              I'm passionate about creating efficient solutions that drive business growth and 
              enhance user experiences. Currently focusing on peer-to-peer finance platforms 
              and enterprise applications.
            </p>
          </div>
          <div style={{
            background: 'rgba(31, 41, 55, 0.5)',
            border: '1px solid #374151',
            borderRadius: '8px',
            padding: '16px',
            transition: 'all 0.2s'
          }}>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '12px',
              marginTop: 0,
              color: '#e5e7eb'
            }}>
              Quick Facts
            </h4>
            <ul style={{
              margin: 0,
              paddingLeft: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              color: '#d1d5db',
              fontSize: '13px'
            }}>
              {[
                '3+ Years Experience',
                'Full-Stack Developer',
                'Cloud Architecture',
                'Mumbai, India'
              ].map((fact, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: 0
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    background: '#60a5fa',
                    borderRadius: '50%',
                    marginRight: '8px',
                    flexShrink: 0
                  }}></span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default function Education() {
  const education = {
    degree: "B.E. Computer Engineering",
    institution: "Xavier Institute Of Engineering",
    location: "Mumbai, India",
    period: "2017 - 2021",
    cgpa: "8.45/10",
    achievements: [
      "Top of the class with 10 SGPA",
      "Published two research papers",
      "Active participation in technical competitions"
    ]
  }

  return (
    <section id="education" style={{
      padding: '32px 48px',
      minHeight: '100%',
      background: '#2d2d30',
      width: '100%',
      height: '100%',
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
        Education
      </h2>
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <div style={{
          background: 'rgba(31, 41, 55, 0.5)',
          border: '1px solid #374151',
          borderRadius: '8px',
          padding: '16px',
          transition: 'all 0.2s'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '16px',
            gap: '16px'
          }}>
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#e5e7eb',
                marginBottom: '4px',
                marginTop: 0
              }}>
                {education.degree}
              </h3>
              <p style={{
                color: '#60a5fa',
                fontWeight: '600',
                fontSize: '14px',
                margin: '0 0 4px 0'
              }}>
                {education.institution}
              </p>
              <p style={{
                color: '#d1d5db',
                fontSize: '13px',
                margin: 0
              }}>
                {education.location}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{
                color: '#9ca3af',
                fontWeight: '500',
                fontSize: '13px'
              }}>
                {education.period}
              </span>
              <p style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#4ade80',
                marginTop: '4px',
                margin: '4px 0 0 0'
              }}>
                CGPA: {education.cgpa}
              </p>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '12px'
          }}>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#e5e7eb',
              marginBottom: '8px',
              marginTop: 0
            }}>
              Key Achievements
            </h4>
            <ul style={{
              color: '#d1d5db',
              margin: 0,
              paddingLeft: 0,
              fontSize: '13px',
              lineHeight: '1.6'
            }}>
              {education.achievements.map((achievement, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '6px'
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    background: '#60a5fa',
                    borderRadius: '50%',
                    marginRight: '8px',
                    marginTop: '4px',
                    flexShrink: 0
                  }}></span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


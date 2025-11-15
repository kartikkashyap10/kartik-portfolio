export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Atrina Technologies",
      period: "Jul 2024 - Present",
      description: "Building peer-to-peer finance platform with Node.js, Next.js, AWS, PostgreSQL"
    },
    {
      title: "Software Development Engineer",
      company: "LenDenClub",
      period: "Jul 2023 - Apr 2024",
      achievements: [
        "Integrated attribution platforms, automated processes, improved business metrics",
        "28% reduction in funnel drop rate, 1-2 crore monthly business increase"
      ]
    },
    {
      title: "Software Engineer",
      company: "Xoriant",
      period: "Jul 2021 - Jul 2024",
      achievements: [
        "Infrastructure provisioning with Terraform, Azure, GCP",
        "53% reduction in manual debugging time, 30% boot time improvement"
      ]
    }
  ]

  return (
    <section id="experience" style={{
      background: '#2d2d30',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'auto',
      padding: '32px 48px',
      minHeight: '100%'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#60a5fa',
        margin: '0 0 20px 0'
      }}>
        Work Experience
      </h2>
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {experiences.map((exp, index) => (
            <div 
              key={index}
              style={{
                background: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid #374151',
                borderRadius: '8px',
                padding: '16px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(31, 41, 55, 0.8)';
                e.currentTarget.style.borderColor = '#4b5563';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(31, 41, 55, 0.5)';
                e.currentTarget.style.borderColor = '#374151';
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
                gap: '16px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#e5e7eb',
                    margin: '0 0 4px 0'
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{
                    color: '#60a5fa',
                    fontWeight: '600',
                    fontSize: '14px',
                    margin: 0
                  }}>
                    {exp.company}
                  </p>
                </div>
                <span style={{
                  color: '#9ca3af',
                  fontSize: '12px',
                  whiteSpace: 'nowrap'
                }}>
                  {exp.period}
                </span>
              </div>
              
              {exp.description && (
                <p style={{
                  color: '#d1d5db',
                  margin: '8px 0',
                  fontSize: '13px',
                  lineHeight: '1.5'
                }}>
                  {exp.description}
                </p>
              )}
              
              {exp.achievements && (
                <ul style={{
                  color: '#d1d5db',
                  margin: '8px 0 0 0',
                  paddingLeft: '20px',
                  fontSize: '13px',
                  lineHeight: '1.6'
                }}>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


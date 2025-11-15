const skills = [
  'JavaScript','TypeScript','Go','Java','SQL','Node.js','Nest.js','React.js','Next.js'
]

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" style={{
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
      <h2 id="skills-title" style={{
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#60a5fa',
        margin: '0 0 20px 0'
      }}>
        Skills
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {skills.map((skill) => (
          <div 
            key={skill}
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              color: '#60a5fa',
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              fontSize: '13px',
              fontWeight: 500,
              transition: 'all 0.2s',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
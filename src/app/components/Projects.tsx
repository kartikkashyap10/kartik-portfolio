'use client'

import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState('Parity Protocol')

  const projects = [
    {
      title: "Parity Protocol",
      description: "A decentralized, verifiable compute execution network—think trustless AWS Lambda where anyone can contribute compute and earn rewards.",
      technologies: ["Go", "Docker", "PostgreSQL", "ERC-20", "Ethereum", "Web3"],
      github: "https://github.com",
      demo: "https://blitlabs.xyz/"
    },
    {
      title: "ThreeDrive",
      description: "A decentralized Google Drive-like filesystem powered by the Walrus protocol. Provides intuitive nested folders, real-time collaboration, and SDK integration.",
      technologies: ["npm", "WebSockets", "Walrus", "Blockchain"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "OpenFund",
      description: "A decentralized crowdfunding platform with smart contract automation.",
      technologies: ["Express.js", "React.js"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "3-Transform",
      description: "Advanced 3D transformation library for web applications.",
      technologies: ["React", "Solidity"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Dhanush",
      description: "A sophisticated project management tool.",
      technologies: ["React", "Django"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Three Bricks",
      description: "Building blocks for modern web applications.",
      technologies: ["React", "Solidity"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Pointer Aid",
      description: "Smart pointer management system.",
      technologies: ["React"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Three Money",
      description: "Financial management and tracking system.",
      technologies: ["React", "Solidity"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Any Code",
      description: "Universal code execution platform.",
      technologies: ["React Native"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Three Chain",
      description: "Blockchain integration framework.",
      technologies: ["Solidity", "React"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Placement Pred...",
      description: "Machine learning placement prediction system.",
      technologies: ["Python", "Flask"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Mail Project",
      description: "Email management and automation system.",
      technologies: ["React", "Django"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Team Manager",
      description: "Team collaboration and management tool.",
      technologies: ["React", "Django"],
      github: "https://github.com",
      demo: "#"
    }
  ]

  const currentProject = projects.find(p => p.title === selectedProject)

  return (
    <section id="projects" style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      background: '#2d2d30',
      overflow: 'hidden'
    }}>
      {/* Left Sidebar - Project List */}
      <div style={{
        width: '300px',
        background: '#252526',
        borderRight: '1px solid #3c3c3c',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px',
          borderBottom: '1px solid #3c3c3c',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#858585',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            📁 PROJECTS
            <span style={{ marginLeft: 'auto', fontSize: '12px' }}>({projects.length})</span>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{
          padding: '8px 12px',
          borderBottom: '1px solid #3c3c3c'
        }}>
          <input 
            type="text"
            placeholder="Search projects..."
            style={{
              width: '100%',
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid #3c3c3c',
              borderRadius: '4px',
              padding: '6px 8px',
              color: '#cccccc',
              fontSize: '12px',
              outline: 'none'
            }}
          />
        </div>

        {/* Projects List */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          padding: '8px'
        }}>
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => setSelectedProject(project.title)}
              style={{
                background: selectedProject === project.title ? '#0e639c' : 'transparent',
                border: 'none',
                color: selectedProject === project.title ? '#ffffff' : '#cccccc',
                padding: '8px 12px',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                borderRadius: '4px',
                marginBottom: '2px'
              }}
              onMouseEnter={(e) => {
                if (selectedProject !== project.title) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedProject !== project.title) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: '13px' }}>📁</span>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {project.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Section - Project Details */}
      <div style={{
        flex: 1,
        background: '#1e1e1e',
        overflow: 'auto',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        {currentProject ? (
          <>
            {/* Project Header */}
            <div>
              <h2 style={{
                fontSize: '28px',
                fontWeight: 700,
                color: '#ffffff',
                margin: '0 0 12px 0'
              }}>
                {currentProject.title}
              </h2>
              <div style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '16px'
              }}>
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    background: 'rgba(59, 130, 246, 0.2)',
                    color: '#60a5fa',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 500,
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                  }}
                >
                  🔗 GitHub
                </a>
                {currentProject.demo !== '#' && (
                  <a
                    href={currentProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      background: 'rgba(34, 197, 94, 0.2)',
                      color: '#22c55e',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.2)';
                    }}
                  >
                    🌐 Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#a0a0a0',
                margin: '0 0 8px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Description
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#d1d5db',
                lineHeight: '1.6',
                margin: 0
              }}>
                {currentProject.description}
              </p>
            </div>

            {/* Technology Stack */}
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#a0a0a0',
                margin: '0 0 12px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Tech Stack
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      background: 'rgba(66, 165, 245, 0.15)',
                      color: '#42a5f5',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: 500,
                      border: '1px solid rgba(66, 165, 245, 0.3)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              padding: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{
                fontSize: '13px',
                color: '#858585',
                margin: 0,
                lineHeight: '1.5'
              }}>
                💡 Click on projects in the left panel to view details. Each project includes source code links and live demos where available.
              </p>
            </div>
          </>
        ) : (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#858585'
          }}>
            Select a project to view details
          </div>
        )}
      </div>
    </section>
  )
}
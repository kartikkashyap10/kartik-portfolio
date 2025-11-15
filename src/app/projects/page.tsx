import ProjectsList from '../components/ProjectsList'

const projects = [
  {
    name: 'Portfolio Website',
    description: 'The site you’re viewing now, built with Next.js and React.',
  },
  {
    name: 'Weather App',
    description: 'A simple weather app using OpenWeatherMap API.',
  },
  // Add more projects as you like
]

export default function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      <ProjectsList projects={projects} />
    </main>
  )
}
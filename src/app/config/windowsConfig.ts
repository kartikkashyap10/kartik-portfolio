export interface WindowConfig {
  id: string
  name: string
  displayName: string
  icon: string
  description: string
}

export const windowsConfig: WindowConfig[] = [
  {
    id: 'About',
    name: 'About Me',
    displayName: 'About Me',
    icon: '/icons/linux.png',
    description: 'Learn more about Kartik Kashyap'
  },
  {
    id: 'Projects',
    name: 'Projects',
    displayName: 'Projects',
    icon: '/icons/visualStudio.png',
    description: 'View my portfolio projects'
  },
  {
    id: 'Experience',
    name: 'Experience',
    displayName: 'Experience',
    icon: '/icons/terminal.png',
    description: 'Check out my work experience'
  },
  {
    id: 'Notes',
    name: 'Notes',
    displayName: 'Notes - Knowledge Base',
    icon: '/icons/notes.png',
    description: 'Browse my knowledge base and coding stats'
  }
]

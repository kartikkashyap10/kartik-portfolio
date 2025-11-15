type Project = {
    name: string
    description: string
}

export default function ProjectsList(
    { projects }: { projects: Project[] }
) {
    return (
        <ul>
            {projects.map((project, idx) => (
                <li key={idx}>
                    <strong>{project.name}</strong>: {project.description}
                </li>
            ))}
        </ul>
    )
}
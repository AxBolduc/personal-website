type ProjectMarkdown = {
  title: string
  file: string
  description: string
  rawContent: () => string
}

export default function getProjectData(project: ProjectMarkdown) {
  return {
    slug: project.file.split('/').pop()?.split('.').shift(),
  }
}

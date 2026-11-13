function ProjectCard({ title, description, techStack, githubUrl, demoUrl }) {
  return (
    <article className="project-card">
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tech-list" aria-label={`${title} technologies`}>
          {techStack.map((technology) => (
            <li className="tech-tag" key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
      <div className="project-card__links">
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href={demoUrl} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}

export default ProjectCard;

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

function ProjectCard({
  title,
  description,
  image,
  link,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <img className="project-image" src={image} alt={`${title} project`} />

      <div className="project-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <h3>Technologies</h3>

        <ul className="tech-list">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <a
          className="project-link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "React UI Component Library",
    description:
      "A reusable React and TypeScript component library containing buttons, cards, text, images, tables, dropdowns, and other interface components.",
    image: "/images/component-library.png",
    link: "https://github.com/Jasmail-rrc",
    technologies: [
      "React",
      "TypeScript",
      "Storybook",
      "Jest",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    title: "Prairie Kicks E-Commerce Website",
    description:
      "An e-commerce application that allows customers to browse products and provides an administrator dashboard for managing products and images.",
    image: "/images/prairie-kicks.png",
    link: "https://github.com/Jasmail-rrc",
    technologies: [
      "Ruby on Rails",
      "HTML",
      "CSS",
      "Bootstrap",
      "SQLite",
      "Active Storage",
    ],
  },
  {
    title: "PHP Blog Application",
    description:
      "A database-driven blog application that displays posts and uses PHP and MySQL for server-side data management.",
    image: "/images/php-blog.png",
    link: "https://github.com/Jasmail-rrc",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
  },
];

function Work() {
  return (
    <main>
      <div className="page-heading">
        <h1>My Work</h1>

        <p>
          These projects demonstrate the technical and problem-solving skills I
          developed throughout the Full Stack Web Development program.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}

export default Work;

import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="hero">
      <h1>Jasmail Singh Dhaliwal</h1>

      <h2>Full Stack Web Development Student</h2>

      <p>
        Welcome to my professional portfolio. This website showcases my academic
        projects, technical skills, learning resources, and developer setup
        completed throughout the Full Stack Web Development program at Red River
        College Polytechnic.
      </p>

      <div className="hero-buttons">
        <Link to="/work" className="btn-primary">
          View My Work
        </Link>

        <Link to="/skills" className="btn-secondary">
          View Skills
        </Link>
      </div>
    </main>
  );
}

export default Home;

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/resources">Resources</NavLink>
      <NavLink to="/developer-setup">Developer Setup</NavLink>
    </nav>
  );
}

export default Navigation;

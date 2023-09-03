import {NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pdfsummary">Pdf summary</NavLink>
      <NavLink to="/video-summary">Video summary</NavLink>
    </nav>
  );
}
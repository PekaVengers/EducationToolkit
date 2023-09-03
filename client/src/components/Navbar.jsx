import { NavLink } from "react-router-dom";
import logo from "../assets/images/logoEduToolkit.png"

export default function Navbar() {
  return (
  <nav className="w-[100vw] py-4 bg-[#006194] flex justify-around items-center">
    <NavLink to="/" className="text-tertiary text-[2.5rem]"><img src={logo} alt="logo" /></NavLink>
    <button className="translate bg-secondary px-[2rem] rounded-[2rem] text-tertiary text-[2.5rem]">Translate</button>
  </nav>
  );
}
import { NavLink } from "react-router-dom";
import { useUiStore } from "../store/useUiStore";

function Navbar() {
  const theme = useUiStore((state) => state.theme);
  const toggleTheme = useUiStore((state) => state.toggleTheme);

  return (
    <nav
      className={`flex items-center justify-between p-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-blue-600 text-white"
      }`}
    >
      <div className="flex gap-6">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/list/want">Want</NavLink>

        <NavLink to="/list/active">Active</NavLink>

        <NavLink to="/list/done">Done</NavLink>

        <NavLink to="/list/dropped">Dropped</NavLink>

        <NavLink to="/about">About</NavLink>
      </div>

      <button
        onClick={toggleTheme}
        className="rounded bg-white px-3 py-1 text-black"
      >
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;

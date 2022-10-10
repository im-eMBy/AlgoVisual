import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "#FB8B24" } : undefined
            }
          >
            Sorting
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sudoku-solver"
            style={({ isActive }) =>
              isActive ? { color: "#FB8B24" } : undefined
            }
          >
            Sudoku
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

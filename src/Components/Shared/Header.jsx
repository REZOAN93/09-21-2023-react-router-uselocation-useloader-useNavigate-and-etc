import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            ></ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex gap-6 text-lg font-bold">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/user"}>User</NavLink>
            <NavLink to={"/post"}>Post</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/more"}>More</NavLink>
            <NavLink to={"/mealdb"}>MealDB</NavLink>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Header;

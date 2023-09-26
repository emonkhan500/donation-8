import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="navbar w-full px-36 mt-5 ">
      <div className="flex-1">
        <img src="https://i.ibb.co/tm7CZcb/Logo.png" alt="" />
      </div>
      <div className=" ">
        <ul className="md:flex gap-5 smt-7">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

import { NavLink } from "react-router-dom";


const Nav = () => {
   
    return (
        <div className="navbar bg-base-100 w-full px-36 mt-5 ">
  <div className="flex-1">
<img src='https://i.ibb.co/tm7CZcb/Logo.png' alt="" />
  </div>
  <div className="flex-none ">
    <ul className="gap-3 menu-horizontal px-1">
      <li><NavLink to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "bg-red-400 rounded p-2"
  }>Home</NavLink></li>
      <li><NavLink to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "bg-red-400 rounded p-2"
  }>Donation</NavLink></li>
      <li><NavLink to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "bg-red-400 rounded p-2"
  }>Statistics</NavLink></li>
    
    </ul>
  </div>
</div>
    );
};

export default Nav;
import { useRef } from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light navbar-dark">
      <div className="container-fluid">
        <NavLink onClick={collapseNav} className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          ref={navButton}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          ref={linksContainerRef}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                onClick={collapseNav}
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Mercury
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={collapseNav} className="nav-link" to="/venus">
                Venus
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={collapseNav} className="nav-link" to="/earth">
                Earth
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={collapseNav} className="nav-link" to="/mars">
                Mars
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={collapseNav} className="nav-link" to="/jupiter">
                Jupiter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={collapseNav} className="nav-link" to="/saturn">
                Saturn
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={collapseNav} className="nav-link" to="/Neptune">
                Neptune
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
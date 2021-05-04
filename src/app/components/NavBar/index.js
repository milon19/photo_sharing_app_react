import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import auth from "../../settings/auth";
import allActions from "../../_redux/actions";

const NavBar = ({ user, header }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(allActions.authActions.logoutUser());
  };

  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to={"/"}>
          {header}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#toggleData"
          aria-controls="toggleData"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="toggleData">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={"#"}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"#"}>
                Link
              </Link>
            </li>
          </ul>

          <ul class="navbar-nav px-3">
            {auth.getToken() === null ? (
              <>
                <li class="nav-item text-nowrap">
                  <Link className="nav-link" to={"/auth/login/"}>
                    Login
                  </Link>
                </li>
                <li class="nav-item text-nowrap">
                  <Link className="nav-link" to={"/auth/register/"}>
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item text-nowrap">
                  <Link className="nav-link" to={"/profile/"}>
                    Profile
                  </Link>
                </li>
                <li class="nav-item text-nowrap">
                  <Link className="nav-link" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

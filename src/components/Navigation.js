import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="container_nav">
        <ul>
          <NavLink to="/">
            <li>
              <img src="images/logo.webp" alt="logo projection" />
            </li>
          </NavLink>
          <NavLink
            to="/Bilan-de-competence"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Bilan de compétence</li>
          </NavLink>
          <NavLink
            to="/Rendez-vous"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Rendez-vous</li>
          </NavLink>
          <NavLink
            to="/Tarifs"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Tarifs</li>
          </NavLink>
          <NavLink
            to="/Contact"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            to="/A-propos"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Présentation</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

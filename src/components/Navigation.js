import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingDown = currentScrollPos > prevScrollPos;
    setPrevScrollPos(currentScrollPos);
    setVisible(() => {
      if (isScrollingDown === true) {
        // si défilement vers le bas
        return false; // Cacher la navigation
      } else {
        return true; // montre la nav
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`nav ${visible ? "visible" : "hidden"}`}>
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

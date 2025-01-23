import React, { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  // Utilisation de useCallback pour mémoriser handleScroll
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    const isScrollingDown = currentScrollPos > prevScrollPos;
    setPrevScrollPos(currentScrollPos);
    setVisible(isScrollingDown === true ? false : true); // simplification
  }, [prevScrollPos]); // Ajoute prevScrollPos comme dépendance de handleScroll

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Ajoute handleScroll comme dépendance dans useEffect

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
            <li>Bilan de compétences</li>
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

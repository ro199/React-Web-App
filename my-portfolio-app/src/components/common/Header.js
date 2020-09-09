import React from "react";
import { NavLink } from "react-router-dom";
import { ImFacebook2, ImLinkedin, ImGithub } from "react-icons/im";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <nav
        className="js-colorlib-nav-toggle colorlib-nav-toggle"
        data-toggle="collapse"
        data-target="#navigation"
        aria-expanded="true"
        aria-controls="navbar"
      >
        <i />
      </nav>
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <div
            className="author-img"
            style={{ backgroundImage: "url(images/about1.jpg)" }}
          />
          <h1 id="colorlib-logo">
            <NavLink to="/">Ronald Alvarado</NavLink>
          </h1>
          <span style={{ fontFamily: "Times New Roman" }}>
            Hola, mi nombre es Ronald Alvarado, soy estudiante de Ingeniería en
            Sistemas Informáticos y de Computación. ¡Bienvenido a mi sitio web
            personal!
          </span>
        </div>
        <hr />

        <div className="text-center">
          <ul className="social-list list-inline py-20 mx-auto">
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/ronald-alvarado-049082179/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImLinkedin style={{ fontSize: "30px" }} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.facebook.com/ronaldalvardo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook2 style={{ fontSize: "30px" }} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.github.com/ro199"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImGithub style={{ fontSize: "30px" }} />
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navigation" className="collapse">
            <ul>
              <li>
                <NavLink to="/" data-nav-section="about">
                  Acerca de mi
                </NavLink>
              </li>
              <li>
                <NavLink to="/curriculum" data-nav-section="curriculum">
                  Currículum
                </NavLink>
              </li>
              <li>
                <NavLink to="/certificate" data-nav-section="certificate">
                  Certificaciones
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" data-nav-section="project">
                  Portafolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" data-nav-section="contact">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="colorlib-footer">
          <p>
            <small></small>
          </p>
          <p>
            <small></small>
          </p>
          <p>
            <small>
              <AiOutlineCopyrightCircle />{" "}
              <script>document.write(new Date().getFullYear());</script>{" "}
              Copyright Ronald Alvarado
            </small>
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Header;

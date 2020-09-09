import React, { useState, useEffect } from "react";
import { projectTypeImage, projectTypeClass } from "./ImageContent";
import { AiFillEye } from "react-icons/ai";

const Project = () => {
  const [dataGit, setDataGit] = useState([]);

  async function fetchData() {
    const url = "https://api.github.com/users/ro199/repos";
    const res = await fetch(url);
    res
      .json()
      .then((res) => setDataGit(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="colorlib-work" data-section="project">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animated-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="project">
                    <h2 className="colorlib-heading">Portafolio</h2>
                    <h2 className="colorlib-hero">
                      Bienvenido!... Aquí obtendrás información de los proyectos
                      que he realizado a lo largo de mis estudios.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {dataGit.map((repo) => (
                  <div
                    className={projectTypeClass(repo.language)}
                    key={repo.id}
                  >
                    <div className="card project-card">
                      <div className="row no-glutters">
                        <div className="col-lg-4 card-img-holder">
                          <img
                            src={projectTypeImage(repo.language)}
                            className="card-img"
                            alt="image"
                          />
                        </div>
                        <div className="col-lg-8">
                          <div className="card-body">
                            <h5 className="card-title">{repo.name}</h5>
                            <p className="card-text">{repo.description}</p>
                            <p className="card-text">
                              <small className="text-muted">
                                {repo.language
                                  ? "Lenguaje: " + repo.language
                                  : ""}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="link-mask">
                        <div className="link-mask-text">
                          <a
                            className="btn btn-secondary"
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i>
                              <AiFillEye style={{ fontSize: "25px" }} />
                              <i> </i>Ver proyecto
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

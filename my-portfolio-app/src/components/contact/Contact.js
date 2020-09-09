import React, { useState, useRef } from "react";
import NotificationSystem from "react-notification-system";
import { notification } from "../common/Notification";

const Contact = () => {
  const [datos, setDatos] = useState({});
  const notificationSystem = useRef(null);

  async function fetchData() {
    const url = "https://ro199.pythonanywhere.com/api/contact/";
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setDatos({});
      notification(
        notificationSystem,
        "Su mensaje ha sido enviado, pronto recibirá una respuesta. Gracias",
        "success"
      );
    } else {
      notification(
        notificationSystem,
        "Su mensaje no se ha podido enviar inténtelo mas tarde. Gracias",
        "error"
      );
    }
  }

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log("Enviando datos...." + JSON.stringify(datos));
    fetchData();
  };
  return (
    <div>
      <section className="colorlib-contact" data-section="certificate">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="contact-asc">
                    <h2 className="colorlib-heading">Contacto</h2>
                    <h5 className="colorlib-hero text-center">
                      {" "}
                      ¿Estás interesado en contratarme o solo quieres saludarme?
                    </h5>
                    <div></div>
                    <div className="container">
                      <form
                        className="contact-form col-lg-8 mx-lg-auto"
                        onSubmit={enviarDatos}
                      >
                        <h3 className="text-center mb-3">Contáctame</h3>
                        <div className="form-row">
                          <div className="form-group col-12">
                            <input
                              className="form-control"
                              type="text"
                              name="contact_name"
                              placeholder="Nombre"
                              onChange={handleInputChange}
                              value={datos.contact_name || ""}
                              required
                            />
                          </div>
                          <div className="form-group col-12">
                            <input
                              className="form-control"
                              type="email"
                              name="conact_email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={datos.conact_email || ""}
                              required
                            />
                          </div>
                          <div className="form-group col-12">
                            <textarea
                              className="form-control"
                              type="text"
                              name="message"
                              placeholder="Ingrese su mensaje"
                              rows="10"
                              cols="40"
                              onChange={handleInputChange}
                              value={datos.message || ""}
                              required
                            />
                          </div>
                          <div className="form-group col-12">
                            <button
                              className="btn btn-block btn-primary py-2"
                              type="submit"
                            >
                              Enviar Ahora
                            </button>
                          </div>
                        </div>
                      </form>
                      <NotificationSystem ref={notificationSystem} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

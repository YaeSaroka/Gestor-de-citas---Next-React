"use client";
import React from 'react';
import Input from "../componente/Input/index.jsx";
import Button from "../componente/button_form/index.jsx";

const page = (props) => {
  var labels = props.labels;

  return (
    <div className="section px-2 px-lg-4 pb-4 pt-5 mb-5" id="mod6">
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 className="markermodu4 marker-center">Contacto</h2>
        </div>
        <div className="row">
          <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="bg-light my-2 p-3 pt-2">
              <form method="POST">

                <div className="input-container">
                  <label>Email</label>
                  <Input type="text" placeholder="Ingrese su email" />
                </div>

                <div className="input-container">
                  <label>Asunto</label>
                  <Input type="text" placeholder="Ingrese el asunto" />
                </div>

                <div className="input-container">
                  <label>Mensaje</label>
                  <textarea placeholder="Ingrese su mensaje"></textarea>
                </div>

                <Button>Enviar</Button>

              </form>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
            <div className="mt-3 px-1">
              <div className="h5">Sigamos en contacto!</div>
              <p>
                Comunícate con nosotros a través del formulario.
              </p>
              <p>¡Gracias por visitar nuestro sitio web!</p>
            </div>
            <div className="mt-53 px-1">
              <div className="row">
                <div className="col-sm-2">
                  <div className="pb-1">Email:</div>
                </div>
                <div className="col-sm-10">
                  <div className="pb-1 fw-bolder">yaesaroka@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
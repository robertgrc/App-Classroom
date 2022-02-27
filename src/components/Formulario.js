import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Forms,
  Label,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
} from "../elements/ElementsFormularios";

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import InputComponent from "./InputComponent";

const Formulario = () => {
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [password2, setPassword2] = useState({ campo: "", valido: null });
  const [telefono, setTelefono] = useState({ campo: "", valido: null });
  const [sexo, setSexo] = useState({ campo: "", valido: null });
  const [date, setDate] = useState({ campo: "", valido: null });

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        setPassword2((prevState) => {
          return { ...prevState, velido: "false" };
        });
      } else {
        setPassword2((prevState) => {
          return { ...prevState, velido: "true" };
        });
      }
    }
  };
  return (
    <main>
      <h2>Formulario</h2>
      <Forms>
        <InputComponent
          estado={nombre}
          cambiarEstado={setNombre}
          label="Nombre"
          type="text"
          name="nombre"
          placeholder="Escribe tu Nombre"
          leyendaError="El nombre solo puede contener letras, acentos y espacios"
          expresionRegular={expresiones.nombre}
        />

        <InputComponent
          estado={email}
          cambiarEstado={setEmail}
          label="email"
          type="email"
          name="email"
          placeholder="jose@email.com"
          leyendaError="El usuario tiene que ser de 4 a 16 digitos, sin  espacios vacios"
          expresionRegular={expresiones.correo}
        />

        <InputComponent
          estado={password}
          cambiarEstado={setPassword}
          label="Contraseña"
          type="password"
          name="password1"
          placeholder="email@email.com"
          leyendaError="La contraseña tiene que ser de 4 a 12 digitos"
          expresionRegular={expresiones.password}
        />
        <InputComponent
          estado={password2}
          cambiarEstado={setPassword2}
          label="Repetir Contraseña"
          type="password"
          name="password2"
          leyendaError="Ambas contraseñas deben ser iguales"
          funcion={validarPassword2}
        />

        <InputComponent
          estado={telefono}
          cambiarEstado={setTelefono}
          label="Telefono"
          type="text"
          name="telefono"
          placeholder="79784659"
          leyendaError="el telefono solo puede contener numeros con un maximo de 14 caracteres"
          expresionRegular={expresiones.telefono}
        />

        <InputComponent
          estado={sexo}
          cambiarEstado={setSexo}
          label="Sexo"
          type="select"
          name="password2"
          leyendaError="Ambas deben ser iguales"
        />

        <InputComponent
          estado={date}
          cambiarEstado={setDate}
          label="Fecha"
          type="date"
          name="fecha"
        />

        <ContenedorTerminos>
          <Label>
            <input type="checkbox" id="terminos" name="terminos" />
            Acepto los Terminos y Condiciones
          </Label>
        </ContenedorTerminos>
        {false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b>Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>
        )}
        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          <MensajeExito>Formulario enviado exitosamente!!!</MensajeExito>
        </ContenedorBotonCentrado>
      </Forms>
    </main>
  );
};

export default Formulario;

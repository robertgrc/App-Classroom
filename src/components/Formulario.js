import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Forms,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
} from "../elements/ElementsFormularios";

import {
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sexo, setSexo] = useState("");
  const [date, setDate] = useState("");

  return (
    <main>
      <h2>Formulario</h2>
      <Forms action="">
        <div>
          <Label htmlFor="nombre">Nombre:</Label>
          <GrupoInput>
            <Input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Escribe tu Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <IconoValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>lorem ipsun dolor sit amet</LeyendaError>
        </div>

        <div>
          <Label htmlFor="email">Email:</Label>
          <GrupoInput>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Escribe tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <IconoValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>lorem ipsun dolor sit amet</LeyendaError>
        </div>

        <div>
          <Label htmlFor="password">Password:</Label>
          <GrupoInput>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Escribe tu Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconoValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>lorem ipsun dolor sit amet</LeyendaError>
        </div>

        <div>
          <Label htmlFor="fecha">Fecha:</Label>
          <GrupoInput>
            <Input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <IconoValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>lorem ipsun dolor sit amet</LeyendaError>
        </div>

        <div>
          <Label htmlFor="nombre">Sexo:</Label>
          <GrupoInput>
            <IconoValidacion icon={faCheckCircle} />
            <select name="sexo" onChange={(e) => setSexo(e.target.value)}>
              <option value="">---</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
              <option value="indefinido">Prefiero no mencionarlo</option>
            </select>
          </GrupoInput>
          <LeyendaError>lorem ipsun dolor sit amet</LeyendaError>
        </div>

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

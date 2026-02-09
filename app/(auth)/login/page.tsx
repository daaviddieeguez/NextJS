"use client";

import Form from "next/form";
import { useState } from "react";

export default function Login() {
  const [nombre, setNombre] = useState("");

  return (
    <>
      <div className="m-10 flex flex-col items-start border-2 w-100 h-80 mx-auto rounded-lg ltr">
        <h1 className="font-bold text-center text-3xl ms-8 my-4">
          Inicia sesión
        </h1>
        <div className="ms-8 w-full">
          <Form action="/logout">
            <p className="my-2">Introduce tu nombre de usuario</p>
            <input name="user" className="my-2 border-2 rounded-md px-2" onChange={(e) => setNombre(e.target.value)}/>
            <p className="my-2">Introduce tu contraseña</p>
            <input name="password" className="my-2 border-2 rounded-md px-2" />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-800 text-white w-84 py-2 rounded-2xl items-center my-2"
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
      {
        <p>{nombre}</p>
      }
    </>
  );
}

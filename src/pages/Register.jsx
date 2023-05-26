import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    username: "",
    email: "",
    password: "",
    password_repeat: "",
  });
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const valor = e.target.value;
    setError([]);

    setFormulario({ ...formulario, [name]: valor });
    console.log(name, valor);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let errores = [];

    if (
      formulario.username.trim() === "" ||
      formulario.email.trim() === "" ||
      formulario.password.trim() === "" ||
      formulario.password_repeat.trim() === ""
    ) {
      errores.push("Los campos son obligatorios");
      setError(errores);
      return;
    }

    if (formulario.password.trim() !== formulario.password_repeat.trim()) {
      errores.push("Las contraseñas deben coincidir");
      setError(errores);
      return;
    }

    setIsLoading(true);

    fetch("https://odd-gray-rabbit-cap.cyclic.app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Tipo de contenido del cuerpo de la solicitud
      },
      body: JSON.stringify({
        usarname: formulario.username,
        email: formulario.email,
        password: formulario.password,
      }), // Datos que se enviarán en el cuerpo de la solicitud
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del servidor
        console.log(data);
        if (data.error) {
          setError([data.error]);
          return;
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        // Manejar errores
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 animate-fade">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Crear Cuenta</h1>
      </div>

      <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="nombre_usuario" className="sr-only">
            Nombre
          </label>

          <div className="relative">
            <input
              type="text"
              name="username"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese su nombre"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese Correo Electrónico"
              onChange={handleChange}
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              name="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese su contraseña"
              onChange={handleChange}
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password_repeat" className="sr-only">
            Contraseña
          </label>

          <div className="relative">
            <input
              type="password"
              name="password_repeat"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Repita su contraseña"
              onChange={handleChange}
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        {error.length > 0 && (
          <div className="border border-red-500 text-red-500 p-2 rounded-lg">
            <ul>
              {error.map((err, index) => {
                return <li key={index}>{err}</li>;
              })}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Ya tienes una cuenta?
            <Link to={"/login"} className="underline" href="">
              Inicia Sesión!
            </Link>
          </p>

          {isLoading ? (
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white disabled:opacity-75 animate-pulse"
              disabled
              // onClick={handleLogin}
            >
              Creando Cuenta...
            </button>
          ) : (
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              onClick={handleRegister}
            >
              Crear Cuenta
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

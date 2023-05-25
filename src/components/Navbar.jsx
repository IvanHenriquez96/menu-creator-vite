import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";

export const Navbar = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.user.isLogged);
  console.log(isLogged);

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to={"/"}>
            <span className="ml-3 text-xl">Tailblocks</span>
          </Link>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"/"}>
            <p className="mr-5 hover:text-gray-900">Inicio</p>
          </Link>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>

        {!isLogged ? (
          <>
            <Link to={"/login"}>
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-1">
                Iniciar Sesión
              </button>
            </Link>

            <Link to={"/register"}>
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Crea tu cuenta
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/profile"}>
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-1">
                Mi Perfil
              </button>
            </Link>

            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={() => dispatch(logout())}
            >
              Cerrar Sesión
            </button>
          </>
        )}
      </div>
    </header>
  );
};

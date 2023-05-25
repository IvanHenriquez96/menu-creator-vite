import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";

export const router = createBrowserRouter([
  //Ruta Raiz con rutas anidadas
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
      // { path: "/adopta/:idMascota", element: <InfoMascotaPage /> },
      // { path: "/fundaciones", element: <FundacionesPage /> },
      // // { path: "/recursos", element: <RecursosPage /> },
      // { path: "/quienessomos", element: <QuienesSomos /> },
      // { path: "/login", element: <Login /> },
      // { path: "/Registrarse", element: <Registro /> },
      // { path: "/perfil", element: <MiPerfil /> },
      // { path: "/logout", element: <Logout /> },

      // {
      //   path: "/dashboard",
      //   element: <LayoutAdmin />,
      //   children: [{ index: true, element: <DashboardPage /> }],
      // },
    ],
  },
]);

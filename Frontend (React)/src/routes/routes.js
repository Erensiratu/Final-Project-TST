import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login"
import Logout from "../components/Logout";
import Home from "../components/Home";
import TableTest from "../components/Tabletesy";
import PelangganTable from "../components/TablePelanggan";
import TablePelanggan from "../components/TablePelanggan";
import FormPelanggan from "../components/FormPelanggan";
import TableJasa from "../components/TableJasa";
import FormJasa from "../components/FormJasa";
import TableProduk from "../components/TableProduk";
import Register from "../components/Register";
import FormProduk from "../components/FormProduk";
const AuthRoutes = ({ children } ) => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
        return children
    } 
    window.location = '/'
}

const routeList = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    }, 
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/logout",
        element: <AuthRoutes><Logout /></AuthRoutes>
    },
    {
        path: "/test",
        element: <AuthRoutes><TableTest/></AuthRoutes>
    },
    {
        path: "/pelanggan",
        element: <AuthRoutes><TablePelanggan/></AuthRoutes> 
    },
    {
        path: "/pelanggan/tambah",
        element: <AuthRoutes><FormPelanggan action={"Tambah"}/></AuthRoutes>
    },
    {
        path: "/pelanggan/edit",
        element: <AuthRoutes><FormPelanggan action={"Edit"}/></AuthRoutes>
    },
    {
        path: "/pemesanan/jasa",
        element: <AuthRoutes><TableJasa /></AuthRoutes>
    },
    {
        path: "/pemesanan/jasa/tambah",
        element: <AuthRoutes><FormJasa action={"Tambah"}/></AuthRoutes>
    },
    {
        path: "/pemesanan/jasa/edit",
        element: <AuthRoutes><FormJasa action={"Edit"}/></AuthRoutes>
    },
    {
        path: "/produk",
        element: <AuthRoutes><TableProduk /></AuthRoutes>
    },
    {
        path: "/produk/tambah",
        element: <AuthRoutes><FormProduk action={"Tambah"}/></AuthRoutes>
    },
    {
        path: "/produk/edit",
        element: <AuthRoutes><FormProduk action={"Edit"}/></AuthRoutes>
    }

]);

const Routes = () => {
  return <RouterProvider router={routeList} />;
};

export default Routes;

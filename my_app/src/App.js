import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootElement from "./components/RootElement";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:ProductId",
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

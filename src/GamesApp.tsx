import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRouter from "./router/AppRouter";
import { AppRoutes } from "./router/AppRoutes";

const routesConfig = createBrowserRouter([
  {
    path: '/',
    element: (<AppRouter/>),
    children: AppRoutes,
  },
  {
    path: '/*',
    element: <Navigate to={"/"}/>,
  }
])

const GamesApp = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routesConfig}/>;
    </Provider>
  );
};

export default GamesApp;

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TodoPage from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import Root from "./pages/Root";
import ErrorPage from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "todo",
        element: <TodoPage />,
      },
      {
        path: "todo/:id",
        element: <DetailPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

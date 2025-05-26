import styles from "./App.module.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PlanetsPage from "./pages/Planets";

// layouts
import RootLayout from './layouts/RootLayout'
import SpacecraftsPage from "./pages/Spacecrafts";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="planets" element={<PlanetsPage />} />
      <Route path="spacecrafts" element={<SpacecraftsPage />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

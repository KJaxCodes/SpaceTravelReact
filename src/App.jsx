import styles from "./App.module.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PlanetsPage from "./pages/Planets";

// layouts
import RootLayout from './layouts/RootLayout'
import SpacecraftsPage from "./pages/Spacecrafts/Spacecrafts";
import Spacecraft from "./pages/Spacecrafts/Spacecraft";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="planets" element={<PlanetsPage />} />
        <Route path="spacecrafts" element={<SpacecraftsPage />} />
        <Route path="spacecrafts/:id" element={<Spacecraft />} />
      </Route>

      <Route path="*" element={<NotFound />} />
      {/* This catches ALL unmatched routes */}
    </>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

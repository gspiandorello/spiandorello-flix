import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Movie from "./pages/Movie/movie";
import PageNotFound from "./pages/PageNotFound/pageNotFound";
import Favorites from "./pages/Favorites/favorites";

import Layout from "./components/Layout/layout";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <Layout>
              <Movie />
            </Layout>
          }
        />
        <Route
          path="/my-movies"
          element={
            <Layout>
              <Favorites />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <PageNotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;

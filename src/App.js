import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";
import { errorBoundary } from "./helpers/errorBoundary";
import "./App.css";

const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./containers/Home"));
const Favorites = lazy(() => import("./containers/Favorites"));
const Details = lazy(() => import("./containers/Details"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/details/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default errorBoundary(App);

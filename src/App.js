import React from "react";
import { Route } from "react-router";
import DrinkChoice from "./components/DrinkChoice";
import  Layout  from './components/Layout';
import "./custom.css";

const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={DrinkChoice} />
    </Layout>
  );
};

export default App;

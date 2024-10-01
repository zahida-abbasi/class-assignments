import React from "react";
import Layout from "./components/layout/Layout";
import Home from "./components/home/home";
const Main = () =>{
  const design = (
    <> 
      <Layout>
          <Home />
      </Layout>
  
    </>

  );
  return design;
}
export default Main;
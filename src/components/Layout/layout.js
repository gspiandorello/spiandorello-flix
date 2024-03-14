import React from "react";
import Header from "../Header/header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content">{children}</main>
    </>
  );
};

export default Layout;

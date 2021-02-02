import React, { Children } from "react";
import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Head></Head>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;

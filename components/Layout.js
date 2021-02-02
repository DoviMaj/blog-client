import React, { Children } from "react";
import Head from "next/head";
import Nav from "./Nav";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Head></Head>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

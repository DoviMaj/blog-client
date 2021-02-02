import Link from "next/link";
import React from "react";
import styles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

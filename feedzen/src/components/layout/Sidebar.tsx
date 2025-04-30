import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/settings">Settings</a></li>
      <li><a href="/logout">Logout</a></li>
    </ul>
  </aside>
);

export default Sidebar;

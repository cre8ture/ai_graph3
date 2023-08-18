import React from "react";
import styles from "./Graph.module.css";

const Graph = () => {
  return (
    <div className={styles.graph}>
      <div className={`${styles.node} ${styles.red}`}></div>
      <div className={styles.edge}></div>
      <div className={`${styles.node} ${styles.green}`}></div>
      <div className={styles.edge}></div>
      <div className={`${styles.node} ${styles.blue}`}></div>
    </div>
  );
};

export default Graph;

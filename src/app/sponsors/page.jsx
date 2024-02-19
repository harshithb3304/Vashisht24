"use client";
import React from "react";
import styles from "../styles/sponsors.module.css";
import Navbar from "../(components)/navbar";

const sponsors = () => {
  return (
    <main className={styles.sponsormain}>
      <div>
        <Navbar />
      </div>
      <div className={styles.sponsormain}>sponsors</div>
    </main>
  );
};

export default sponsors;

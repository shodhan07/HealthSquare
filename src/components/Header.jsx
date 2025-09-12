import React, { useState } from "react";
import styles from "./header.module.css";
import Login from "./Login"; // import your Login component

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Health Square</div>
        <div className={styles.authButtons}>
          <button
            className={styles.signIn}
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
          <button
            className={styles.signUp}
            onClick={() => setShowLogin(true)}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* 🔹 Modal Overlay */}
      {showLogin && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeBtn}
              onClick={() => setShowLogin(false)}
            >
              ✖
            </button>
            <Login />
          </div>
        </div>
      )}

    </>
  );
}

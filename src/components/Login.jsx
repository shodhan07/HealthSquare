import React, { useState } from "react";
import styles from "./login.module.css";

export default function Login({ role, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.card}>
        <button className={styles.closeBtn} onClick={onClose}>✖</button>
        <h2>{isSignUp ? `Create ${role} Account` : `Login as ${role}`}</h2>
        <p className={styles.subtitle}>
          {isSignUp
            ? "Sign up to get started"
            : "Sign in to continue"}
        </p>

        <form className={styles.form}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className={styles.input}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            required
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles.input}
              required
            />
          )}

          <button type="submit" className={styles.submitBtn}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {!isSignUp ? (
          <p className={styles.toggleText}>
            Don’t have an account?{" "}
            <span onClick={() => setIsSignUp(true)}>Sign Up</span>
          </p>
        ) : (
          <p className={styles.toggleText}>
            Already a member?{" "}
            <span onClick={() => setIsSignUp(false)}>Sign In</span>
          </p>
        )}
      </div>
    </div>
  );
}

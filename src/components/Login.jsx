import React, { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className={styles.loginContainer}>
            <div className={styles.card}>
                <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
                <p className={styles.subtitle}>
                    {isSignUp ? "Sign up to get started" : "Sign in to continue"}
                </p>

                <form className={styles.form}>
                    {isSignUp && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className={styles.input}
                        />
                    )}
                    <input type="email" placeholder="Email" className={styles.input} />
                    <input
                        type="password"
                        placeholder="Password"
                        className={styles.input}
                    />

                    {isSignUp && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className={styles.input}
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

import React, { useState } from "react";
import styles from "./header.module.css";
import RoleSelectModal from "./RoleSelectModal";
import Login from "./Login";

export default function Header() {
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [role, setRole] = useState("");

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setShowRoleModal(false);
    setShowLogin(true);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Health Square</div>
        <div className={styles.authButtons}>
          <button
            className={styles.signIn}
            onClick={() => setShowRoleModal(true)}
          >
            Sign In
          </button>
          <button
            className={styles.signUp}
            onClick={() => setShowRoleModal(true)}
          >
            Sign Up
          </button>
        </div>
      </header>

      {showRoleModal && (
        <RoleSelectModal
          onClose={() => setShowRoleModal(false)}
          onSelect={handleRoleSelect}
        />
      )}

      {showLogin && (
        <Login role={role} onClose={() => setShowLogin(false)} />
      )}
    </>
  );
}

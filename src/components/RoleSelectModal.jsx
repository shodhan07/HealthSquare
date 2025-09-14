import React from "react";
import styles from "./roleSelectModal.module.css";
import { FaUserInjured, FaUserMd, FaUserShield } from "react-icons/fa";

const roles = [
  { name: "Patient", icon: <FaUserInjured />, desc: "Book appointments & track health" },
  { name: "Doctor", icon: <FaUserMd />, desc: "Manage patients & consultations" },
  { name: "Admin", icon: <FaUserShield />, desc: "Control hospital operations" },
];

export default function RoleSelectModal({ onClose, onSelect }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>✖</button>
        <h2>Select Who's Logging In</h2>
        <div className={styles.roleOptions}>
          {roles.map((r) => (
            <div
              key={r.name}
              className={styles.roleCard}
              onClick={() => onSelect(r.name)}
            >
              <div className={styles.icon}>{r.icon}</div>
              <h3>{r.name}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

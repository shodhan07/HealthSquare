import React from "react";
import styles from "./footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Minimal Info Row */}
      <div className={styles.infoRow}>
        <p>Email: support@healthsquare.com | Phone: +91 8861714675</p>
        <p>Koramangala, Bengaluru</p>
      </div>

      {/* Bottom Section */}
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Health Square. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

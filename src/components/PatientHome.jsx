import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // <-- add this
import styles from "./patientHome.module.css";
import {
    FaCalendarCheck, FaClipboardList, FaAmbulance, FaUserMd,
    FaFileMedical, FaPills, FaMoneyBillWave, FaHospital
} from "react-icons/fa";
import RoleSelectModal from "./RoleSelectModal";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // <-- initialize navigate

    return (
        <div className={styles.home}>
            <div className={styles.heroContainer}>
                <div className={styles.heroSection}>
                    <img
                        src="https://img.freepik.com/free-photo/happiness-bargain-clinic-bed-equipment_1134-972.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Hospital"
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}>
                        <h1>Your Health, Our Priority</h1>
                        <p>Trusted care at your fingertips. Book, manage and track easily.</p>
                        <button
                            className={styles.heroBtn}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                <div className={styles.rightContent}>
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="Search doctors, hospitals, or specialties..." />
                        <button>Search</button>
                    </div>

                    <h2 className={styles.sectionTitle}>Quick Access</h2>
                    <div className={styles.menu}>
                        {/* <div className={styles.card}><FaCalendarCheck /><p>Book Appointment</p></div> */}
                        <div
                            className={styles.card}
                            onClick={() => navigate("/book-appointment")}
                        >
                            <FaCalendarCheck />
                            <p>Book Appointment</p>

                        </div>
                        <div
                            className={styles.card}
                            onClick={() => navigate("/appointments")}
                        >
                            <FaClipboardList />
                            <p>My Appointments</p>
                        </div>
                        
                        <div className={styles.card}><FaHospital /><p>Hospitals</p></div>
                        <div className={styles.card}><FaUserMd /><p>Doctors</p></div>
                        <div className={styles.card}><FaFileMedical /><p>Medical Records</p></div>
                        <div className={styles.card}><FaPills /><p>Prescriptions</p></div>
                        <div className={styles.card}><FaMoneyBillWave /><p>Billing</p></div>
                        <div className={`${styles.card} ${styles.emergency}`}>
                            <FaAmbulance />
                            <p>Emergency</p>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <RoleSelectModal onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};

export default Home;

import React, { useState } from "react";
import styles from "./appointments.module.css";
import { FaSearch, FaCalendarPlus, FaUserMd, FaClock, FaCheckCircle } from "react-icons/fa";

const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Aditi Sharma",
      specialty: "Cardiologist",
      date: "2025-10-15",
      time: "10:30 AM",
      status: "Upcoming",
      image: "https://img.freepik.com/free-photo/portrait-female-doctor-office_23-2148827766.jpg?w=740"
    },
    {
      id: 2,
      doctor: "Dr. Ravi Kumar",
      specialty: "Dermatologist",
      date: "2025-10-02",
      time: "3:00 PM",
      status: "Completed",
      image: "https://img.freepik.com/free-photo/portrait-male-doctor-smiling_23-2148886487.jpg?w=740"
    },
    {
      id: 3,
      doctor: "Dr. Neha Patel",
      specialty: "Pediatrician",
      date: "2025-10-20",
      time: "9:00 AM",
      status: "Upcoming",
      image: "https://img.freepik.com/free-photo/portrait-young-indian-doctor-with-stethoscope_23-2149344049.jpg?w=740"
    }
  ];

  const filteredAppointments = appointments.filter(
    (a) =>
      a.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.appointments}>
      <header className={styles.header}>
        <h1>My Appointments</h1>
        <button className={styles.newBtn}>
          <FaCalendarPlus /> Book New Appointment
        </button>
      </header>

      <div className={styles.searchBar}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search by doctor or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section className={styles.section}>
        <h2>Upcoming Appointments</h2>
        <div className={styles.cardsContainer}>
          {filteredAppointments
            .filter((a) => a.status === "Upcoming")
            .map((a) => (
              <div key={a.id} className={styles.card}>
                <img src={a.image} alt={a.doctor} className={styles.docImage} />
                <div className={styles.cardContent}>
                  <h3>{a.doctor}</h3>
                  <p className={styles.specialty}>{a.specialty}</p>
                  <div className={styles.details}>
                    <FaClock /> <span>{a.date} | {a.time}</span>
                  </div>
                  <span className={styles.statusUpcoming}>Upcoming</span>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Past Appointments</h2>
        <div className={styles.cardsContainer}>
          {filteredAppointments
            .filter((a) => a.status === "Completed")
            .map((a) => (
              <div key={a.id} className={styles.card}>
                <img src={a.image} alt={a.doctor} className={styles.docImage} />
                <div className={styles.cardContent}>
                  <h3>{a.doctor}</h3>
                  <p className={styles.specialty}>{a.specialty}</p>
                  <div className={styles.details}>
                    <FaClock /> <span>{a.date} | {a.time}</span>
                  </div>
                  <span className={styles.statusCompleted}>
                    <FaCheckCircle /> Completed
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Appointments;

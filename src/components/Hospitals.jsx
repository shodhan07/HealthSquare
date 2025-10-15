import React, { useState } from "react";
import styles from "./hospital.module.css";
import { FaSearch, FaHospital, FaMapMarkerAlt, FaPhoneAlt, FaInfoCircle } from "react-icons/fa";

const Hospitals = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const hospitals = [
    {
      id: 1,
      name: "Fortis Hospital",
      location: "Bengaluru, Karnataka",
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      contact: "+91 98765 43210",
      image: "https://img.freepik.com/free-photo/modern-hospital-building_1127-3276.jpg?w=740",
    },
    {
      id: 2,
      name: "Manipal Hospitals",
      location: "Whitefield, Bengaluru",
      specialties: ["Oncology", "Gastroenterology", "Pediatrics"],
      contact: "+91 99887 77665",
      image: "https://img.freepik.com/free-photo/modern-building-hospital_1127-3245.jpg?w=740",
    },
    {
      id: 3,
      name: "Apollo Hospitals",
      location: "Jayanagar, Bengaluru",
      specialties: ["Dermatology", "ENT", "Emergency Care"],
      contact: "+91 98765 32109",
      image: "https://img.freepik.com/free-photo/exterior-modern-hospital-building_1127-3277.jpg?w=740",
    },
    {
      id: 4,
      name: "Columbia Asia Hospital",
      location: "Hebbal, Bengaluru",
      specialties: ["Urology", "Gynecology", "General Surgery"],
      contact: "+91 77654 22311",
      image: "https://img.freepik.com/free-photo/modern-medical-center-exterior_1127-3278.jpg?w=740",
    },
  ];

  const filteredHospitals = hospitals.filter(
    (h) =>
      h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.hospitals}>
      <header className={styles.header}>
        <h1><FaHospital /> Hospitals & Medical Centers</h1>
        <button className={styles.newBtn}>
          <FaInfoCircle /> Add New Hospital
        </button>
      </header>

      <div className={styles.searchBar}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search by hospital or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          {filteredHospitals.map((hospital) => (
            <div key={hospital.id} className={styles.card}>
              <img src={hospital.image} alt={hospital.name} className={styles.hospitalImage} />
              <div className={styles.cardContent}>
                <h3>{hospital.name}</h3>
                <p className={styles.location}>
                  <FaMapMarkerAlt /> {hospital.location}
                </p>
                <div className={styles.specialties}>
                  {hospital.specialties.map((spec, index) => (
                    <span key={index} className={styles.tag}>{spec}</span>
                  ))}
                </div>
                <p className={styles.contact}>
                  <FaPhoneAlt /> {hospital.contact}
                </p>
                <button className={styles.detailsBtn}>
                  <FaInfoCircle /> View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hospitals;

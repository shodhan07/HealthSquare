import React, { useState } from "react";
import styles from "./bookAppointment.module.css";
import { FaCalendarAlt, FaUserMd, FaClock, FaCheckCircle } from "react-icons/fa";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.appointmentContainer}>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.contentBox}>
        {/* Left: Form */}
        {!submitted ? (
          <div className={styles.formSection}>
            <h2>
              <FaCalendarAlt className={styles.icon} /> Book an Appointment
            </h2>
            <p className={styles.subtext}>
              Schedule your appointment effortlessly and connect with our top specialists.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Department</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>Dermatology</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label>Doctor</label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option>Dr. Priya Sharma</option>
                    <option>Dr. Rajesh Kumar</option>
                    <option>Dr. Sneha Iyer</option>
                    <option>Dr. Arjun Mehta</option>
                  </select>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Book Appointment
              </button>
            </form>
          </div>
        ) : (
          <div className={styles.confirmationBox}>
            <FaCheckCircle className={styles.successIcon} />
            <h2>Appointment Confirmed!</h2>
            <p>
              Your appointment with <b>{formData.doctor}</b> on{" "}
              <b>{formData.date}</b> at <b>{formData.time}</b> has been successfully booked.
            </p>
            <button
              className={styles.backBtn}
              onClick={() => setSubmitted(false)}
            >
              Book Another
            </button>
          </div>
        )}

        {/* Right: Illustration & Text */}
        <div className={styles.illustrationSection}>
          <img
            src="https://www.shutterstock.com/image-vector/book-your-appointment-on-calendar-600nw-2305316035.jpg"
            alt="Doctor Illustration"
            className={styles.illustration}
          />
          <h3>Your Health, Our Priority</h3>
          <p>
            Get the care you need from trusted professionals. Easy booking,
            real-time updates, and expert consultations — all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;

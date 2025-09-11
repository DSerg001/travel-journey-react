import { useState } from "react";
import styles from "./Header.module.css";
import AddTripModal from "../Modal/AddTripModal";
import logo from "../../assets/travel journey.png";
import useAuthStore from "../../store/useAuthStore";

const Header = () => {
  const { userData, logout } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTripClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleAddTrip = (tripData) => {
    console.log("New trip added:", tripData);
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href="/">
          <img src={logo} alt="Travel Journey" className={styles.logo} />
        </a>
      </div>

      <nav className={styles.nav}>
        <a href="/explore" className={styles.navLink}>
          Explore
        </a>

        {userData ? (
          <div className={styles.authLinks}>
            <a href="/my-journal" className={styles.navLink}>
              My Journal
            </a>
            <button className={styles.headerBtn} onClick={handleAddTripClick}>
              Add Trip
            </button>
            <button className={styles.logoutBtn} onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <a href="/login" className={styles.navLink}>
            Login
          </a>
        )}
      </nav>

      <AddTripModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAdd={handleAddTrip}
      />
    </header>
  );
};

export default Header;

import { useState } from "react";
import styles from "./Header.module.css";
import AddTripModal from "../Modal/AddTripModal";
import logo from "../../assets/travel journey.png";
import useAuthStore from "../../store/useAuthStore";

const Header = () => {
  const { userData, logout } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTripClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTrip = (tripData) => {
    console.log("New trip added:", tripData);
  };

  return (
    <div className={styles.header}>
      <div className={styles.imgLogo}>
        <a href="/">
          <img src={logo} alt="Travel Journey" className="logo" />
        </a>
      </div>
      <nav className={styles.navigateBtn}>
        <a href="/explore">
          <h3 className={styles.headerBtn}>Explore</h3>
        </a>

        {userData ? (
          <div className={styles.authLinks}>
            <a href="/my-journal">
              <h3 className={styles.headerBtn}>My Journal</h3>
            </a>
            <button className={styles.headerBtn} onClick={handleAddTripClick}>
              Add Trip
            </button>
            <button className={styles.logoutBtn} onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <a href="/login">
            <h3 className={styles.headerBtn}>Login</h3>
          </a>
        )}
      </nav>

      <AddTripModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAdd={handleAddTrip}
      />
    </div>
  );
};

export default Header;

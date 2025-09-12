import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import AddTripModal from "../Modal/AddTripModal";
import logo from "../../assets/travel journey.png";
import useAuthStore from "../../store/useAuthStore";

const Header = () => {
  const { userData, logout } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${!showHeader ? styles.hide : ""}`}>
      <div className={styles.headerContent}>
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
              <button className={styles.primaryBtn} onClick={openModal}>
                Add Trip
              </button>
              <button className={styles.secondaryBtn} onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <a href="/login" className={styles.navLink}>
              Login
            </a>
          )}
        </nav>
      </div>

      <AddTripModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAdd={(trip) => console.log("New trip:", trip)}
      />
    </header>
  );
};

export default Header;

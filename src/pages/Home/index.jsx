import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <h1 className={styles.welcomeText}>Welcome to Travel Journey</h1>
        <p className={styles.description}>
          Discover and share your unforgettable travel experiences with a
          vibrant community of explorers. From hidden gems to popular
          destinations, find your next adventure here.
        </p>
        <a href="/explore" className={styles.exploreButton}>
          Start Exploring
        </a>
      </div>
    </div>
  );
};

export default Home;

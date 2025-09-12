import styles from "./Home.module.css";
import travelVideo from "../../assets/Travel video.mp4";
import Slider from "../../components/Slider/Slider.jsx";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <video
          className={styles.videoBackground}
          src={travelVideo}
          autoPlay
          loop
          muted
          playsInline
        />

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
        
        <div className={styles.scrollHint}>
          <span className={styles.arrow}>&#x2193;</span>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <h2 className={styles.sliderTitle}>Most Viewed Posts</h2>
        <Slider />
      </div>
    </>
  );
};

export default Home;

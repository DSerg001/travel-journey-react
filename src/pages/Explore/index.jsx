import { Link } from "react-router-dom";
import useJournalStore from "../../store/useJournalStore";
import styles from "./Explore.module.css";
import travelPosts from "../../data/travelPosts";

const Explore = () => {
  const myJournal = useJournalStore((state) => state.myJournal);

  const combinedPosts = [
    ...myJournal.map((post) => ({ ...post, source: "journal" })),
    ...travelPosts.map((post) => ({ ...post, source: "travel" })),
  ];

  return (
    <div className={styles.exploreGrid}>
      {combinedPosts.map((post) => (
        <div key={`${post.source}-${post.id}`} className={styles.travelCard}>
          <img
            src={post.imageUrl || post.imagePreview}
            alt={post.title}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <p className={styles.cardLocation}>{post.location}</p>
            <p className={styles.cardDate}>{post.date}</p>
            <p className={styles.cardDescription}>{post.description}</p>
            <Link
              to={`/post/${post.source}/${post.id}`}
              className={styles.readMoreBtn}
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Explore;

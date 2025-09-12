import { Link } from "react-router-dom";
import useJournalStore from "../../store/useJournalStore";
import travelPosts from "../../data/travelPosts";
import styles from "./Explore.module.css";

const Explore = () => {
  const myJournal = useJournalStore((state) => state.myJournal);

  const combinedPosts = [
    ...myJournal.map((post) => ({ ...post, source: "journal" })),
    ...travelPosts.map((post) => ({ ...post, source: "travel" })),
  ];

  return (
    <div className={styles.exploreGrid}>
      {combinedPosts.length === 0 ? (
        <p className={styles.noPosts}>No trips to display</p>
      ) : (
        combinedPosts.map((post) => (
          <Link
            key={`${post.source}-${post.id}`}
            to={`/post/${post.source}/${post.id}`}
            className={styles.travelCard}
          >
            <div className={styles.imageWrapper}>
              <img
                src={post.imageUrl || post.imagePreview}
                alt={post.title}
                className={styles.cardImage}
              />
              <div className={styles.views}>👁 {post.views || 0}</div>
            </div>

            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardLocation}>{post.location}</p>
              <p className={styles.cardDate}>{post.date}</p>
              <p className={styles.cardDescription}>{post.description}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Explore;

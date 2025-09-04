import useJournalStore from "../../store/useJournalStore";
import styles from "./MyJournal.module.css";
import recycleBinIcon from "../../assets/recyclebinicon.png";

const MyJournalPage = () => {
  const myJournal = useJournalStore((state) => state.myJournal);
  const removeJournal = useJournalStore((state) => state.removeJournal);

  return (
    <div className={styles.exploreGrid}>
      {myJournal.map((post) => (
        <div key={post.id} className={styles.travelCard}>
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
          </div>

          <button
            className={styles.deleteButton}
            onClick={() => removeJournal(post.id)}
          >
            <img
              src={recycleBinIcon}
              alt="Delete"
              className={styles.deleteIcon}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyJournalPage;

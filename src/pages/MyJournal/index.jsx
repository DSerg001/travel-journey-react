import { useContext } from "react";
import { AuthContext } from "../../context/authContext.js";
import styles from "./MyJournal.module.css";
import recycleBinIcon from "../../assets/recyclebinicon.png";

const MyJournalPage = () => {
  const { myJournal, setJournal } = useContext(AuthContext);
  console.log(myJournal);

  return (
    <div className={styles.exploreGrid}>
      {myJournal.map((post) => (
        <div key={post.title} className={styles.travelCard}>
          <img
            src={post.imagePreview}
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
            onClick={() =>
              setJournal(myJournal.filter((j) => j.title !== post.title))
            }
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

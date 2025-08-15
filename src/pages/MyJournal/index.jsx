import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import styles from './MyJournal.module.css'

const MyJournalPage = () => {
  const { myJournal } = useContext(AuthContext);
  return (
    <div>
      {myJournal.map((post) => (
        <div key={post.id} className={styles.travelCard}>
          <img
            src={post.imageUrl}
            alt={post.title}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <p className={styles.cardLocation}>{post.location}</p>
            <p className={styles.cardDate}>{post.date}</p>
            <p className={styles.cardDescription}>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyJournalPage;

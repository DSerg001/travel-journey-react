import { useNavigate } from "react-router-dom";
import useJournalStore from "../../store/useJournalStore";
import { getDescriptionById } from "../../data/contentDescription";
import styles from "./MyJournal.module.css";
import recycleBinIcon from "../../assets/recyclebinicon.png";

const MyJournalPage = () => {
  const navigate = useNavigate();
  const myJournal = useJournalStore((state) => state.myJournal);
  const removeJournal = useJournalStore((state) => state.removeJournal);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.postsCount}>
        <strong>Your Posts Amount:</strong> {myJournal.length}
      </div>

      <div className={styles.exploreGrid}>
        {myJournal.length === 0 ? (
          <p className={styles.noPosts}>No posts in your journal yet</p>
        ) : (
          myJournal.map((post) => {
            const description = post.descriptionId
              ? getDescriptionById(post.descriptionId)
              : post.description || "No description";

            return (
              <div
                key={post.id}
                className={styles.travelCard}
                onClick={() => navigate(`/post/journal/${post.id}`)}
                style={{ cursor: "pointer", position: "relative" }}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={post.imageUrl || post.imagePreview}
                    alt={post.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.views}>👁 {post.views || 0}</div>
                  <button
                    className={styles.deleteButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      removeJournal(post.id);
                    }}
                  >
                    <img
                      src={recycleBinIcon}
                      alt="Delete"
                      className={styles.deleteIcon}
                    />
                  </button>
                </div>

                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardLocation}>{post.location}</p>
                  <p className={styles.cardDate}>{post.date}</p>
                  <p className={styles.cardDescription}>
                    {description.slice(0, 90)}...
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyJournalPage;

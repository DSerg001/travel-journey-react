import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useJournalStore from "../../store/useJournalStore";
import travelPosts from "../../data/travelPosts";
import styles from "./Post.module.css";

const SinglePost = () => {
  const { source, id } = useParams();
  const myJournal = useJournalStore((state) => state.myJournal);
  const updateJournal = useJournalStore((state) => state.updateJournal);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const seenPosts = JSON.parse(localStorage.getItem("seenPosts")) || [];

    if (source === "journal") {
      const found = myJournal.find((p) => String(p.id) === id);
      if (found) {
        if (!seenPosts.includes(`journal-${id}`)) {
          const updated = { ...found, views: (found.views || 0) + 1 };
          updateJournal(updated);
          setPost(updated);

          localStorage.setItem(
            "seenPosts",
            JSON.stringify([...seenPosts, `journal-${id}`])
          );
        } else {
          setPost(found);
        }
      }
    } else if (source === "travel") {
      const storedPosts =
        JSON.parse(localStorage.getItem("travelPosts")) || travelPosts;
      const found = storedPosts.find((p) => String(p.id) === id);
      if (found) {
        if (!seenPosts.includes(`travel-${id}`)) {
          const updated = { ...found, views: (found.views || 0) + 1 };
          const updatedPosts = storedPosts.map((p) =>
            String(p.id) === id ? updated : p
          );
          localStorage.setItem("travelPosts", JSON.stringify(updatedPosts));
          setPost(updated);

          localStorage.setItem(
            "seenPosts",
            JSON.stringify([...seenPosts, `travel-${id}`])
          );
        } else {
          setPost(found);
        }
      }
    }
  }, [source, id, myJournal, updateJournal]);

  if (!post) return <h2 className={styles.notFound}>Post not found</h2>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>
        <b>{post.location}</b> — {post.date}
      </p>
      <img
        src={post.imageUrl || post.imagePreview}
        alt={post.title}
        className={styles.image}
      />
      <p className={styles.description}>{post.description}</p>

      <p className={styles.views}>👁 {post.views}</p>
    </div>
  );
};

export default SinglePost;

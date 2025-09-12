import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useJournalStore from "../../store/useJournalStore";
import travelPosts from "../../data/travelPosts";
import { getDescriptionById } from "../../data/contentDescription";
import styles from "./Post.module.css";

const SinglePost = () => {
  const { source, id } = useParams();
  const myJournal = useJournalStore((state) => state.myJournal);
  const updateJournal = useJournalStore((state) => state.updateJournal);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const seenPosts = JSON.parse(localStorage.getItem("seenPosts")) || [];

    const handlePost = (posts, keyPrefix, updateFn) => {
      const found = posts.find((p) => String(p.id) === id);
      if (!found) return null;

      const key = `${keyPrefix}-${id}`;
      if (!seenPosts.includes(key)) {
        const updated = { ...found, views: (found.views || 0) + 1 };
        if (updateFn) updateFn(updated);
        setPost(updated);
        localStorage.setItem("seenPosts", JSON.stringify([...seenPosts, key]));
      } else {
        setPost(found);
      }
    };

    if (source === "journal") {
      handlePost(myJournal, "journal", updateJournal);
    } else if (source === "travel") {
      const storedPosts =
        JSON.parse(localStorage.getItem("travelPosts")) || travelPosts;
      handlePost(storedPosts, "travel", (updated) => {
        const updatedPosts = storedPosts.map((p) =>
          String(p.id) === id ? updated : p
        );
        localStorage.setItem("travelPosts", JSON.stringify(updatedPosts));
      });
    }
  }, [source, id, myJournal, updateJournal]);

  if (!post) return <h2 className={styles.notFound}>Post not found</h2>;

  const description = getDescriptionById(post.descriptionId);

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
      <p className={styles.description}>{description}</p>
      <p className={styles.views}>👁 {post.views}</p>
    </div>
  );
};

export default SinglePost;

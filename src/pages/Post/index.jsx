import { useParams } from "react-router-dom";
import useJournalStore from "../../store/useJournalStore";
import travelPosts from "../../data/travelPosts";
import styles from "./Post.module.css";

const Post = () => {
  const { source, id } = useParams();
  const myJournal = useJournalStore((state) => state.myJournal);

  let post;
  if (source === "journal") {
    post = myJournal.find((p) => String(p.id) === id);
  } else if (source === "travel") {
    post = travelPosts.find((p) => String(p.id) === id);
  }

  if (!post) return <h2>Post not found</h2>;

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
    </div>
  );
};

export default Post;

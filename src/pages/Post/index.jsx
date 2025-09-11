import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useJournalStore from "../../store/useJournalStore";
import travelPosts from "../../data/travelPosts";
import styles from "./Post.module.css";

const Post = () => {
  const { source, id } = useParams();
  const myJournal = useJournalStore((state) => state.myJournal);

  const [views, setViews] = useState(0);

  let post;
  if (source === "journal") {
    post = myJournal.find((p) => String(p.id) === id);
  } else if (source === "travel") {
    post = travelPosts.find((p) => String(p.id) === id);
  }

  useEffect(() => {
    if (!post) return;

    // Ստանալ պահպանված views-ը localStorage-ից
    const savedViews =
      JSON.parse(localStorage.getItem(`views-${source}-${id}`)) || 0;

    // Ավելացնել 1
    const newViews = savedViews + 1;
    localStorage.setItem(`views-${source}-${id}`, JSON.stringify(newViews));

    setViews(newViews);
  }, [post, source, id]);

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

      {/* Views Display */}
      <div className={styles.views}>👁 {views}</div>
    </div>
  );
};

export default Post;

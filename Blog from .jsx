import { useState } from "react";

const Blog = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = (e) => {
    e.preventDefault();

    if (comment.trim() === "") {
      alert("Comment cannot be empty!");
      return;
    }

    setComments([
      ...comments,
      { id: Date.now(), text: comment },
    ]);
    setComment("");
  };

  return (
    <div style={styles.container}>
      {/* Blog Content */}
      <div style={styles.blogCard}>
        <h2 style={styles.title}>🌍 Building a Modern Web Application</h2>
        <p style={styles.meta}>Posted on: Sept 2025 | Author: Admin</p>

        <p style={styles.content}>
          Modern web applications focus on responsiveness, interactivity, and
          user experience. React helps developers build dynamic interfaces
          efficiently using components and state management.
        </p>

        <p style={styles.content}>
          In this blog, we demonstrate a responsive layout with a real-time
          comment section that updates instantly when users submit feedback.
        </p>
      </div>

      {/* Comment Section */}
      <div style={styles.commentCard}>
        <h3>💬 Comments</h3>

        <form onSubmit={addComment} style={styles.form}>
          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Post
          </button>
        </form>

        <div style={styles.commentList}>
          {comments.length === 0 ? (
            <p style={styles.empty}>No comments yet</p>
          ) : (
            comments.map((c) => (
              <div key={c.id} style={styles.comment}>
                🧑 {c.text}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f4f6ff",
    fontFamily: "Arial, sans-serif",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
  blogCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "10px",
  },
  meta: {
    fontSize: "13px",
    color: "#888",
    marginBottom: "15px",
  },
  content: {
    lineHeight: "1.6",
    marginBottom: "10px",
  },
  commentCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 14px",
    backgroundColor: "#6c5ce7",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  commentList: {
    maxHeight: "200px",
    overflowY: "auto",
  },
  comment: {
    padding: "8px",
    borderBottom: "1px solid #eee",
  },
  empty: {
    textAlign: "center",
    color: "#888",
  },
};

export default Blog;

import Item from "./Item";
import styles from "../../styles/Blog.module.css";

function BlogList({ blogs }) {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {blogs.map((blog) => (
          <Item
            item={blog.attributes}
            key={blog.id}
          />
        ))}
      </div>
    </>
  );
}

export default BlogList;

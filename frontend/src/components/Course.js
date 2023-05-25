import Link from "next/link";
import styles from "../../styles/Course.module.css";

function Course({ course }) {
  const { title, content, image } = course.attributes;

  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{title}</h2>
          <p className={styles.texto}>{content}</p>
          <Link href="#">
            <a className={styles.anchor}>Más Información</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          section {
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${image.data.attributes.url});
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </section>
  );
}

export default Course;

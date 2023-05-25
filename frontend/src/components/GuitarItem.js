import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/GuitarItem.module.css";

function GuitarItem({ guitar }) {
  const { description, image, name, price, url } = guitar;

  return (
    <div className={styles.guitar}>
      <Image
        priority="true"
        layout="responsive"
        width={200}
        height={350}
        src={image?.data[0].attributes.url}
        alt={`Imagen Guitarra ${name}`}
      />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link href={`/guitars/${url}`}>
          <a className={styles.anchor}>Ver guitarra</a>
        </Link>
      </div>
    </div>
  );
}

export default GuitarItem;

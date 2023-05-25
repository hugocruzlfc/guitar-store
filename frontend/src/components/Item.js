import React from "react";
import Link from "next/link";
import Image from "next/image";
import formatDate from "../../helpers/formatDate";
import styles from "../../styles/Item.module.css";

export default function Item({ item }) {
  return (
    <article>
      <Image
        priority="true"
        src={item.picture.data.attributes.url}
        width={800}
        height={600}
        alt={`ìmagen blog ${item.title}`}
        layout="responsive"
      />
      <div className={styles.contenido}>
        <h3>{item.title}</h3>
        <p className={styles.date}>{formatDate(item.publishedAt)}</p>
        <p className={styles.resume}>{item.resume}</p>

        <Link href={`/blog/${item.url}`}>
          <button className={styles.buttonLink}>Leer Entrada</button>
        </Link>
      </div>
    </article>
  );
}

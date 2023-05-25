//import { useRouter } from "next/router";
import Layout from "../../src/components/Layout";
import Image from "next/image";
import formatDate from "../../helpers/formatDate";
import styles from "../../styles/Item.module.css";

export default function BLogEntry({ result }) {
  //   const router = useRouter();
  const {
    attributes: { title, content, picture, publishedAt },
  } = result;

  return (
    <Layout page={title}>
      <main className="contenedor">
        <h1 className="heading">{title}</h1>
        <article className={styles.entry}>
          <Image
            priority="true"
            src={picture.data.attributes.url}
            width={800}
            height={600}
            alt={`ìmagen blog ${title}`}
            layout="responsive"
          />
          <div className={styles.contenido}>
            <p className={styles.date}>{formatDate(publishedAt)}</p>
            <p className={styles.text}>{content}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
}

// export async function getServerSideProps({ query: { id } }) {
//   const URL = `http://localhost:1337/api/blogs/${id}?populate=picture`;
//   const response = await fetch(URL);
//   const result = await response.json();
//   console.log(result);
//   return {
//     props: {
//       result,
//     },
//   };
// }

export async function getStaticPaths() {
  const URL = `${process.env.API_URL}/blogs?populate=picture`;
  const response = await fetch(URL);
  const result = await response.json();

  const paths = result.data.map((item) => ({
    params: {
      url: item.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const URL = `${process.env.API_URL}/blogs?filters[url][$eq]=${url}&populate=picture`;
  //populate[categories][filters][name][$eq] = Cars;
  //http://localhost:1337/api/blogs?filters[url][$eq]=guitarra-de-muestra
  const response = await fetch(URL);
  const result = await response.json();

  return {
    props: {
      result: result.data[0],
    },
  };
}

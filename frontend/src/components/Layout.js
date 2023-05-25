import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, page, guitar }) {
  console.log(guitar);
  return (
    <div>
      <Head>
        <title>GuitarStore - {page}</title>
        <meta
          name="description"
          content="Sitio web de venta de guitarras"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header guitar={guitar} />

      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  guitar: null,
};

import Layout from "../src/components/Layout";
import GuitarsList from "../src/components/GuitarsList";

export default function Tienda({ guitars }) {
  return (
    <Layout
      page="Tienda Virtual>"
      guitar={guitars[1]}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <GuitarsList guitars={guitars} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const URL = `${process.env.API_URL}/guitarras?&sort[0]=name&populate=image`;
  const response = await fetch(URL);
  const guitars = await response.json();
  console.log(guitars.data);
  return {
    props: {
      guitars: guitars.data,
    },
  };
}

// GET /api/articles?populate[categories][sort][0]=name%3Aasc&populate[categories][filters][name][$eq]=Cars

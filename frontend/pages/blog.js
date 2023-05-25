import Layout from "../src/components/Layout";
import BlogList from "../src/components/BlogList";

export default function Blog({ result }) {
  console.log(result);
  console.log(result.data[1]);
  // useEffect(() => {
  //   const consultarAPI = async () => {
  //     const URL = "http://localhost:1337/api/blogs?populate=picture";
  //     const response = await fetch(URL);
  //     const result = await response.json();
  //     console.log(result);
  //   };
  //   consultarAPI();
  // }, []);
  return (
    <Layout page="Blog">
      <main className="contenedor">
        <BlogList blogs={result.data} />
      </main>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const URL = "http://localhost:1337/api/blogs?populate=picture";
//   const response = await fetch(URL);
//   const result = await response.json();

//   return {
//     props: {
//       result,
//     },
//   };
// }

export async function getStaticProps() {
  const URL = `${process.env.API_URL}/blogs?sort[0]=title&populate=picture`;
  const response = await fetch(URL);
  const result = await response.json();
  console.log(result);
  return {
    props: {
      result,
    },
  };
}

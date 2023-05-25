import Layout from "../src/components/Layout";
import GuitarsList from "../src/components/GuitarsList";
import Course from "../src/components/Course";
import BlogList from "../src/components/BlogList";

export default function Home({ guitars, course, blogs }) {
  console.log(guitars);
  console.log(guitars[3]);
  return (
    <Layout
      page="Inicio"
      guitar={guitars[3]}
    >
      <main className="contenedor">
        <h1 className="heading"> Nuestra Colección</h1>
        <GuitarsList guitars={guitars} />
        <Course course={course} />
        <BlogList blogs={blogs} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const GUITARS_URL = `${process.env.API_URL}/guitarras?&sort[0]=name&populate=image`;
  const COURSE_URL = `${process.env.API_URL}/course?populate=image`;
  const BLOGS_URL = `${process.env.API_URL}/blogs?pagination[limit]=3&sort[0]=title&populate=picture`;

  const [responseGuitars, responseCourses, responseBlogs] = await Promise.all([
    fetch(GUITARS_URL),
    fetch(COURSE_URL),
    fetch(BLOGS_URL),
  ]);

  const [guitars, course, blogs] = await Promise.all([
    responseGuitars.json(),
    responseCourses.json(),
    responseBlogs.json(),
  ]);

  return {
    props: {
      guitars: guitars.data,
      course: course.data,
      blogs: blogs.data,
    },
  };
}

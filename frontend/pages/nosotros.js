import Image from "next/image";
import Layout from "../src/components/Layout";
import styles from "../styles/Nosotros.module.css";

export default function nosotros() {
  return (
    <Layout page="Nosotros">
      <main className="contenedor">
        <h2>Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            width={600}
            height={450}
            src="/images/nosotros.jpg"
            alt="Imagen de nosotros"
            layout="responsive"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ornare mollis libero, eu auctor urna. Donec tincidunt tempus
              ipsum. Nam venenatis venenatis justo in molestie. Etiam ac
              vestibulum leo, at aliquet sapien. Nulla aliquet nunc sit amet leo
              pellentesque pulvinar. Quisque eget dignissim nisi, et tempor
              enim. In hac habitasse platea dictumst. Aenean finibus arcu vitae
              neque posuere, id laoreet est efficitur. Vestibulum commodo ornare
              nisi, nec venenatis tellus condimentum sed. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Integer vestibulum lorem in vestibulum tincidunt. Quisque
              suscipit metus orci, vitae pellentesque augue ultrices a. Maecenas
              eros ante, vehicula quis augue et, pulvinar vestibulum sapien. Sed
              dui nisi, efficitur vitae enim consectetur, rhoncus dictum eros.
              Nullam malesuada, ex vitae maximus luctus, metus enim accumsan
              elit, sit amet ornare dolor libero vel ligula. Nullam rhoncus erat
              quis egestas tempor. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Praesent neque turpis,
              aliquam quis dapibus a, molestie id ipsum. Fusce scelerisque ut ex
              tempor faucibus.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

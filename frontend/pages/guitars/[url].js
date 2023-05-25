import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/GuitarItem.module.css";
import Layout from "../../src/components/Layout";

function Product({ guitar, setCarrito }) {
  const [productCount, setProductCount] = useState(1);
  const { description, image, name, price } = guitar[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productCount < 1) {
      alert("Cantidad de producto no valida");
      return;
    }
    const guitarSelected = {
      id: guitar[0].id,
      imagen: image?.data[0].attributes.url,
      name,
      price,
      productCount,
    };
    setCarrito(guitarSelected);
  };
  return (
    <Layout
      page={`Guitar-${name}`}
      guitar={guitar[0]}
    >
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
          <form
            className={styles.formulario}
            onSubmit={handleSubmit}
          >
            <label>Cantidad:</label>
            <select
              value={productCount}
              onChange={(e) => setProductCount(parseInt(e.target.value))}
            >
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <input
              type="submit"
              value="Agregar al carrito"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const GUITAR_URL = `${process.env.API_URL}/guitarras?filters[url][$eq]=${url}&populate=image`;
  const response = await fetch(GUITAR_URL);
  const guitar = await response.json();

  return {
    props: {
      guitar: guitar.data,
    },
  };
}

export default Product;

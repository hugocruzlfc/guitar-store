import Image from "next/image";
import Layout from "../src/components/Layout";
import styles from "../styles/Carrito.module.css";
import { useEffect, useState } from "react";

function Carrito({ carrito, updateProductCount, deleteProduct }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calcTotal = carrito.reduce(
      (acc, producto) => acc + producto.productCount * producto.price,
      0
    );
    setTotal(calcTotal);
  }, [carrito]);
  return (
    <Layout page={"Carrito de Compras"}>
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          <h2>Artículos</h2>
          {carrito.length === 0
            ? "Carrito Vacio"
            : carrito.map((producto) => (
                <div
                  key={producto.id}
                  className={styles.producto}
                >
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={480}
                      src={producto.imagen}
                    />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.name}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>
                      <select
                        value={producto.productCount}
                        className={styles.select}
                        onChange={(e) =>
                          updateProductCount({
                            productCount: e.target.value,
                            id: producto.id,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                    <p className={styles.price}>
                      $ <span>{producto.price}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $
                      <span>{producto.price * producto.productCount}</span>
                    </p>
                  </div>
                  <button
                    className={styles.delete}
                    onClick={() => deleteProduct(producto.id)}
                  >
                    x
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.resume}>
          {total > 0 ? (
            <>
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: ${total}</p>
            </>
          ) : (
            <p>No hay productos</p>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default Carrito;

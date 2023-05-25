import { useEffect, useState } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    handleGetLocalStorage();
  }, []);

  const handleGetLocalStorage = async () => {
    const carritoLocalStorage = await JSON.parse(
      localStorage.getItem("carrito")
    );
    setCarrito(carritoLocalStorage);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const handleSetCarrito = (newProducto) => {
    if (carrito.some((producto) => producto.id === newProducto.id)) {
      const carritoUpdated = carrito.map((producto) => {
        if (producto.id === newProducto.id) {
          producto.productCount = newProducto.productCount;
        }
        return producto;
      });
      setCarrito(carritoUpdated);
    } else {
      setCarrito([...carrito, newProducto]);
    }
  };

  const updateProductCount = (newProducto) => {
    const carritoUpdated = carrito.map((producto) => {
      if (producto.id === newProducto.id) {
        producto.productCount = newProducto.productCount;
      }
      return producto;
    });
    setCarrito(carritoUpdated);
  };

  const deleteProduct = (id) => {
    const carritoUpdated = carrito.filter((producto) => producto.id !== id);
    setCarrito(carritoUpdated);
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      setCarrito={handleSetCarrito}
      updateProductCount={updateProductCount}
      deleteProduct={deleteProduct}
    />
  );
}

export default MyApp;

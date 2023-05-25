import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

export default function Header({ guitar }) {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.svg"
                width={400}
                height={100}
                alt="Imagen logo"
              />
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image
                  layout="fixed"
                  width={25}
                  height={25}
                  src="/images/ShoppingCart.png"
                  alt="Imagen carrito"
                />
              </a>
            </Link>
          </nav>
        </div>
        {guitar && (
          <div className={styles.model}>
            <h2>Modelo {guitar?.attributes?.name}</h2>
            <p>{guitar?.attributes?.description}</p>
            <p className={styles.price}>${guitar?.attributes?.price}</p>
            <Link href={`/guitars/${guitar?.attributes?.url}`}>
              <a className={styles.anchor}>Ver producto</a>
            </Link>
          </div>
        )}
      </div>
      {router.pathname === "/" && (
        <div className={styles.guitar}>
          <Image
            width={750}
            height={1200}
            src="/images/guitar_header.jpg"
            alt="Imagen header"
          />
        </div>
      )}
    </header>
  );
}

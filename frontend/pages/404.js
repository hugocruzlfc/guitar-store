import Link from "next/link";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.not_found}>
      <h1 className="heading">Not Found Page</h1>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
}

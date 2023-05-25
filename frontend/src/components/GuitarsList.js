import GuitarItem from "./GuitarItem";
import styles from "../../styles/GuitarsList.module.css";

function GuitarsList({ guitars }) {
  return (
    <div className={styles.listado}>
      {guitars.map((guitar) => (
        <GuitarItem
          key={guitar.id}
          guitar={guitar.attributes}
        />
      ))}
    </div>
  );
}

export default GuitarsList;

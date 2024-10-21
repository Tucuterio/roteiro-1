import styles from "./Frase.module.css";

function Frase() {
  return (
    <div className={styles.Frasecontainer}>
      <h1 className={styles.Frasecontent}>
        Este é Um Componente com uma Frase
      </h1>
    </div>
  );
}

export default Frase;

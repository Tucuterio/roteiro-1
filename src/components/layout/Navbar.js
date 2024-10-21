import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <ul className={styles.list}>
      <li className={styles.itens}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.itens}>
        <Link to="/empresa">Empresa</Link>
      </li>
      <li className={styles.itens}>
        <Link to="/contato">Contato</Link>
      </li>
      <li className={styles.itens}>
        <Link to="/calculator">Calculadora</Link>
      </li>
    </ul>
  );
}
export default Navbar;

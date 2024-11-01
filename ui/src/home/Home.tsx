import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <img
        className={styles.logo}
        src="thjlogo.png"
        alt="The Heroe's Journey logo"
      />

      <div className={styles.search}>
        <input />
        <button>Search</button>
      </div>
    </div>
  );
};

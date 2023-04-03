import styles from "./index.module.css";
import Card from "./Card";

const MyComponent = () => {
  return (
    <div className={styles.app}>
      {/* <h1>hi</h1> */}
      <header className={styles.header}>
        <img src="/logo.png" className={styles.logo} alt="logo" />
      </header>
      <div className={styles.grid}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

MyComponent.displayName = 'MyComponent';

export default MyComponent;
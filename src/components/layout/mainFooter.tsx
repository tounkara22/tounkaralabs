import { useTranslation } from "next-i18next";
import styles from "./mainFooter.module.css";

const MainFooter = () => {
  const { t } = useTranslation("home_page");

  const date = new Date();

  return (
    <footer className={styles.footer}>
      <p>{`Tounkara Labs, ${date.getFullYear()}`}</p>
    </footer>
  );
};

export default MainFooter;

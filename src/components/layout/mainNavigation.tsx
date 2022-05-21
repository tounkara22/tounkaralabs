import { useTranslation } from "next-i18next";
import Link from "next/link";
import Logo from "./logo";
import styles from "./mainNavigation.module.css";

const MainNavigation = () => {
  const { t } = useTranslation("home_page");

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Logo />
        </Link>
      </header>
    </>
  );
};

export default MainNavigation;

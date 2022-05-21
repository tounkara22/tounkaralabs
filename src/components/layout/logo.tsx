import { useTranslation } from "next-i18next";
import styles from "./mainNavigation.module.css";

const Logo = () => {
  const { t } = useTranslation("home_page");
  return <div className={styles.logo}>{t("header.logo")}</div>;
};

export default Logo;

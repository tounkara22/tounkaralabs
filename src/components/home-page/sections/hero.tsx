import Image from "next/image";
import styles from "./hero.module.css";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("home_page");
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src={"/images/ibrahima-profile.png"}
          width={300}
          height={300}
          alt={t("image_alt")}
        />
      </div>

      <h1>{t("hero.title")}</h1>
      <p>{t("hero.description")}</p>
    </section>
  );
};

export default Hero;

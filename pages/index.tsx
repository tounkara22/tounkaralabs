import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "../src/components/home-page/home-page";

const Home = () => {
  return <HomePage />;
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home_page"])),
  },
});

export default Home;

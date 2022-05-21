import { Fragment } from "react";
import MainFooter from "./mainFooter";
import MainNavigation from "./mainNavigation";

const Layout = (props: any) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
};

export default Layout;

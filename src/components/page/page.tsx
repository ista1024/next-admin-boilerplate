import React from "react";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "@/components/responsiveDrawer";
import PageHeader from "@/components/page/pageHeader";

import styles from "@/styles/Home.module.css";

import MenuConst from "@/const/menu/MenuConst";
import { MenuConstTypes } from "@/const/menu/sideMenu";

interface pageProps {
  pageName: MenuConstTypes;
  children?: React.ReactNode;
}

const Page = ({ pageName, children }: pageProps) => {
  const title = MenuConst[pageName].title;
  const subtitle = MenuConst[pageName].subtitle;

  return (
    <ResponsiveDrawer title={title}>
      <main className={styles.main}>
        <PageHeader title={title} subtitle={subtitle} />
        <Box>{children}</Box>
      </main>
    </ResponsiveDrawer>
  );
};

export default Page;

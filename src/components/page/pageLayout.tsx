import React from "react";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "@/components/responsiveDrawer";
import PageHeader from "@/components/page/pageHeader";

import styles from "@/styles/Home.module.css";

import MenuConst from "@/const/menu/MenuConst";
import { MenuConstType } from "@/const/menu/MenuConst";

interface pageProps {
  pageName: MenuConstType;
  children?: React.ReactNode;
}

const PageLayout = ({ pageName, children }: pageProps) => {
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

export default PageLayout;

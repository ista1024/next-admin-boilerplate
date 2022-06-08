import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";

import ResponsiveDrawer from "@/components/responsiveDrawer";

const Home: NextPage = () => {
  return (
    <ResponsiveDrawer title={"Dash Board"}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Dashboard!</a>
        </h1>
      </main>
    </ResponsiveDrawer>
  );
};

export default Home;

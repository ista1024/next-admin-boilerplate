import type { NextPage } from "next";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

import ResponsiveDrawer from "@/components/responsiveDrawer";

const Home: NextPage = () => {
  return (
    <ResponsiveDrawer title={"Dash Board"}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Dashboard!</a>
        </h1>
        <div>
          <Link href={"http://localhost:5500/loginHtml/login.html"} passHref>
            <a href="http://localhost:5500/loginHtml/login.html">
              <h1>Click here to move to Login!</h1>
            </a>
          </Link>
        </div>
      </main>
    </ResponsiveDrawer>
  );
};

export default Home;

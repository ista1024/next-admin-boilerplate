import type { NextPage } from "next";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Doughnut } from "react-chartjs-2";

import ResponsiveDrawer from "@/components/responsiveDrawer";

const Home: NextPage = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <ResponsiveDrawer title={"Dash Board"}>
      <main className={styles.main}>
        <div>
          <a href="http://localhost:5500/loginHtml/login.html">
            <h1>Click here to move to Login!</h1>
          </a>
        </div>
        <div>
          <Doughnut data={data} />
        </div>
      </main>
    </ResponsiveDrawer>
  );
};

export default Home;

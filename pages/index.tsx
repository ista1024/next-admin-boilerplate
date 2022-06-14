import type { NextPage } from "next";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import ResponsiveLineChart from "@/components/responsiveLine";

import styles from "@/styles/Home.module.css";
import ResponsiveDrawer from "@/components/responsiveDrawer";

type HomePage = {};

type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
  selectedTheme: boolean;
};

const Home: HomePage = ({ toggleTheme, selectedTheme }: HomeProps) => {
  const [checkAuth, setCheckAuth] = useState(false);

  const [data, setdata] = useState<any>({ data: [] });
  const [loading, setLoading] = useState(true);
  const [chart, setChart] = useState(<></>);

  useEffect(() => {
    axios.get("/api/lineChartData").then((res) => {
      setdata(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log(data);
    if (data.data.length > 0)
      setChart(<ResponsiveLineChart {...data} lightTheme={selectedTheme} />);
  }, [data]);

  return (
    <ResponsiveDrawer
      title={"Dash Board"}
      toggleTheme={toggleTheme}
      checked={selectedTheme}
    >
      <main className={styles.main}>
        {checkAuth ? (
          <div>
            <a href="http://localhost:5500/loginHtml/login.html">
              <h1>Click here to move to Login!</h1>
            </a>
          </div>
        ) : null}
        <div
          style={{
            height: 300,
            width: 700,
          }}
        >
          {loading ? <div>Loading...</div> : chart}
        </div>
      </main>
    </ResponsiveDrawer>
  );
};

export default Home;

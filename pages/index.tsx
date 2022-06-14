import type { NextPage } from "next";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { Doughnut } from "react-chartjs-2";
import ResponsiveLineChart from "@/components/responsiveLine";

import styles from "@/styles/Home.module.css";
import ResponsiveDrawer from "@/components/responsiveDrawer";

const Home: NextPage = () => {
  const [checkAuth, setCheckAuth] = useState(false);

  const [data, setdata] = useState<any>({ data: [] });
  const [loading, setLoading] = useState(true);
  const [chart, setChart] = useState(<></>);

  useEffect(() => {
    axios.get("/api/lineChartData").then((res) => {
      setdata(res.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (data.data.length > 0) setChart(<ResponsiveLineChart {...data} />);
  }, [data]);

  return (
    <ResponsiveDrawer title={"Dash Board"}>
      <main className={styles.main}>
        {checkAuth ? (
          <div>
            <a href="http://localhost:5500/loginHtml/login.html">
              <h1>Click here to move to Login!</h1>
            </a>
          </div>
        ) : null}
        <Box sx={{ alignSelf: "flex-start", ml: 20 }}>
          <h1>
            You are safe with <a href="https://ictk.com/">ICTK</a>
          </h1>
          <h1>KEY Management Service(KMS)</h1>
        </Box>
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

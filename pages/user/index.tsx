import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ResponsiveLineChart from "@/components/responsiveLine";

import Page from "@/components/page/page";
const pageName = "user";

const Home: NextPage = () => {
  const [checkAuth, setCheckAuth] = useState(false);

  const [data, setdata] = useState<any>({ data: [] });
  const [loading, setLoading] = useState(true);
  const [chart, setChart] = useState(<></>);

  useEffect(() => {
    axios.get("/api/user").then((res) => {
      // setdata(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (data.data.length > 0) setChart(<ResponsiveLineChart {...data} />);
  }, [data]);

  return (
    <Page title={pageName}>
      <div
        style={{
          height: 300,
          width: 700,
        }}
      >
        {loading ? <div>Loading...</div> : chart}
      </div>
    </Page>
  );
};

export default Home;

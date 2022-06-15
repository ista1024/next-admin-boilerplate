import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ResponsiveLineChart from "@/components/responsiveLine";

import PageLayout from "@/components/page/pageLayout";
import { MenuConstType } from "@/const/menu/MenuConst";
const pageName: MenuConstType = "history";

const Home: NextPage = () => {
  const [checkAuth, setCheckAuth] = useState(false);

  const [data, setdata] = useState<any>({ data: [] });
  const [loading, setLoading] = useState(true);
  const [chart, setChart] = useState(<></>);

  useEffect(() => {
    // axios.get("/api/history").then((res) => {});
    setLoading(false);
  }, []);

  useEffect(() => {
    if (data.data.length > 0) setChart(<ResponsiveLineChart {...data} />);
  }, [data]);

  return (
    <PageLayout pageName={pageName}>
      <div
        style={{
          height: 300,
          width: 700,
        }}
      >
        {loading ? null : chart}
      </div>
    </PageLayout>
  );
};

export default Home;

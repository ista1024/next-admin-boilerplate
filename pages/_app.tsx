import React, { useState, useEffect, useContext } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import lightTheme from "@/styles/theme/lightTheme";
import darkTheme from "@/styles/theme/darkTheme";
import { ThemeContextProvider } from "@/contexts/ThemeContext";

function getActiveTheme(themeMode: "light" | "dark") {
  return themeMode === "light" ? lightTheme : darkTheme;
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  /*
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", desiredTheme);
    setSelectedTheme(desiredTheme);
  };
  */

  useEffect(() => {
    if (!isLogin) {
      // location.href = "http://localhost:5500/loginHtml/login.html";
      router.push("http://localhost:5500/loginHtml/login.html");
    }
    setIsLoading(false);
    // router.push("/");
  }, []);

  return (
    <ThemeContextProvider>
      <Head>
        <title>KMS ADMIN CONSOLE</title>
        <meta name="description" content="KEY Management Service(KMS)" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <Component {...pageProps} />
      </div>
    </ThemeContextProvider>
  );
}

export default MyApp;

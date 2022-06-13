import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import createEmotionCache from "@/util/createEmotionCache";
import lightTheme from "@/styles/theme/lightTheme";
import darkTheme from "@/styles/theme/darkTheme";

import "@/styles/globals.css";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  const router = useRouter();
  const [isLogin, setIsLogin] = React.useState(true);

  React.useEffect(() => {
    if (!isLogin) {
      // location.href = "http://localhost:5500/loginHtml/login.html";
      router.push("http://localhost:5500/loginHtml/login.html");
    }
    // router.push("/");
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>KMS ADMIN CONSOLE</title>
        <meta name="description" content="KEY Management Service(KMS)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

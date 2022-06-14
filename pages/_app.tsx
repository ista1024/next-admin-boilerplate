import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import createEmotionCache from "@/util/createEmotionCache";
import lightTheme from "@/styles/theme/lightTheme";
import darkTheme from "@/styles/theme/darkTheme";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function getActiveTheme(themeMode: "light" | "dark") {
  return themeMode === "light" ? lightTheme : darkTheme;
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLogin, setIsLogin] = React.useState(true);

  const [activeTheme, setActiveTheme] = React.useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = React.useState<"light" | "dark">(
    "light"
  );

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";
    setSelectedTheme(desiredTheme);
  };

  React.useEffect(() => {
    if (!isLogin) {
      // location.href = "http://localhost:5500/loginHtml/login.html";
      router.push("http://localhost:5500/loginHtml/login.html");
    }
    setIsLoading(false);
    // router.push("/");
  }, []);

  React.useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>KMS ADMIN CONSOLE</title>
        <meta name="description" content="KEY Management Service(KMS)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
          <Component
            {...pageProps}
            toggleTheme={toggleTheme}
            selectedTheme={selectedTheme === "dark"}
          />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

import ResponsiveDrawer from "@/components/responsiveDrawer";
import { display } from "@mui/system";

const Login: NextPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    router.push("http://localhost:5500/loginHtml/login.html");
    // router.push("/");
  }, []);

  return (
    <div style={isLogin ? { display: "none;" } : {}}>
      <ResponsiveDrawer title={"Dash Board"}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Dashboard!</a>
          </h1>
          <div>
            <Link
              href={"https://192.168.1.87:5500/loginHtml/login.html"}
              passHref
            >
              <a href="https://192.168.1.87:5500/loginHtml/login.html">
                Login!
              </a>
            </Link>
          </div>
        </main>
      </ResponsiveDrawer>
    </div>
  );
};

export default Login;

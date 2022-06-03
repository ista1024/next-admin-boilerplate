import * as React from "react";
import Head from "next/head";
import Link from "next/link";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <div>
      <Head>
        <title>404 Not found</title>
      </Head>
      <main style={pageStyles}>
        <h1 style={headingStyles}>404 Page not found</h1>
        <div>
          <p style={paragraphStyles}>
            <span>Sorry </span>
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>
            <span> we couldn’t find what you were looking for.</span>.
          </p>
        </div>
        <div>
          <Link href="/">
            <a>Click here to Home</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;

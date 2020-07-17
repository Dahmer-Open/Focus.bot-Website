import Head from "next/head";
import "../styles/index.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Focus Discord Bot</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

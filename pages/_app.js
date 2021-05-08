import "tailwindcss/tailwind.css";
import { DefaultSeo } from "next-seo";
import SEO from "../data/next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

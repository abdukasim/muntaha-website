import { useEffect } from "react";
import Footer from "../components/footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // scroll behavior smooth on anchor tags
  typeof window !== "undefined" &&
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

  return (
    <>
      <Component {...pageProps} />
      {!pageProps.noLayout && <Footer />}
    </>
  );
}

export default MyApp;

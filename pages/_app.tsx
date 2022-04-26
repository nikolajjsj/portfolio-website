import "../styles/global.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/navbar/Navbar";
import { styled } from "../stitches.config";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <s.App>
      <Navbar />

      <s.Main>
        <Component {...pageProps} />
      </s.Main>
    </s.App>
  );
}

namespace s {
  export const App = styled("main", {
    background: "$base",
    color: "$contrast",
    minHeight: "100vh",
    width: "100%",
    fontFamily: "$default",
    paddingBottom: "$12",
  });

  export const Main = styled("div", {
    margin: "0 auto",
    width: "90%",

    "@md": {
      maxWidth: "60%",
    },
  });
}

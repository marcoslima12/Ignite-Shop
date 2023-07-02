import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

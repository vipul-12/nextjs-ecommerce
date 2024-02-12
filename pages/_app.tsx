import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import '../styles/globals.css';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

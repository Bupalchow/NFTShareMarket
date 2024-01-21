import type { AppProps } from "next/app";
import { ThirdwebProvider, embeddedWallet, metamaskWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={`2c072ea4b74bb8241164fbc4150c460a`}
      activeChain={activeChain}
      supportedWallets={[
        embeddedWallet(),
        metamaskWallet()
      ]}
    >
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
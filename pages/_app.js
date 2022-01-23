import '../styles/global.css'
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "regenerator-runtime/runtime";
// import { Html } from 'next/document';



export default function App({ Component, pageProps }) {
  const supportedChainIds = [1, 4, 137];

  const connectors = {
    injected: {},
  };

  return (
    <div data-theme="dark">
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <Component {...pageProps} />
      </ThirdwebWeb3Provider>
    </div>



  )
}

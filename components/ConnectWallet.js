import { useEthers } from "@usedapp/core";
import React, { useRef } from "react";




export const ConnectWalletButton = () => {
  const { account, activateBrowserWallet, deactivate, connector, error } =
    useEthers();

  const errorRef = useRef(null);

  if (error) {
    errorRef.current = { connector, error };
  } else {
    if (errorRef.current?.error && errorRef?.current.connector == connector) {
      errorRef.current = null;
    }
  }
  return (
    <>
      {account ? (
        <button className='btn btn-primary mt-2' onClick={() => deactivate()}>
          Disconnect Wallet
        </button>
      ) : (
        <button
          className='btn btn-primary mt-2'
          onClick={() => activateBrowserWallet()}
          backgroundColor={errorRef.current ? "red.500" : ""}
        >
          {errorRef.current
            ? "Error: Connect Wallet (Retry)"
            : "Connect Wallet"}
        </button>
      )}
    </>
  );
};
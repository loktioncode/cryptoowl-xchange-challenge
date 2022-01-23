
// import { BigNumber } from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";
import { useEtherBalance, useEthers } from "@usedapp/core";
import React from "react";

const ChainComponent= () => {
  const { chainId } = useEthers();
  return <p>Chain ID: {chainId ? chainId : "-"}</p>;
};

const AccountComponent= () => {
  const { account } = useEthers();
  return <p>Account: {account ? account : "-"}</p>;
};

const BalanceComponent = () => {
  const { account } = useEthers();
  const balance = useEtherBalance(account);
  return (
    <p>
      Balance: Ξ{balance ? formatEther(balance) : "0.00"}
    </p>
  );
};

export const Wallet = () => {
  return (
    <>
      <div className="px-2 py-2 lg " >
        <h1 className='md'>Connected Wallet</h1>
        <ChainComponent />
        <AccountComponent />
        <BalanceComponent />
      </div>
    </>
  );
};
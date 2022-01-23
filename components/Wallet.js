import { h1, Stack, Text } from "@chakra-ui/react";
// import { BigNumber } from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";
import { useEtherBalance, useEthers } from "@usedapp/core";
import React from "react";

const ChainComponent= () => {
  const { chainId } = useEthers();
  return <Text>Chain ID: {chainId ? chainId : "-"}</Text>;
};

const AccountComponent= () => {
  const { account } = useEthers();
  return <Text>Account: {account ? account : "-"}</Text>;
};

const BalanceComponent = () => {
  const { account } = useEthers();
  const balance = useEtherBalance(account);
  return (
    <Text>
      Balance: Ξ{balance ? formatEther(balance) : "0.00"}
    </Text>
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
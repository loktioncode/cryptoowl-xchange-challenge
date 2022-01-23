import { useEthers } from "@usedapp/core";
import { ConnectWalletButton } from "components/ConnectWallet";
import { MintNftButton } from "components/MintNftButton";
import { PunkList } from "components/PunkList";
import { Wallet } from "components/Wallet";
import React from "react";

const MintPunks = () => {

  const { account } = useEthers();

  return (
    < >
      <div>
        <h1>thirdweb SDK Example</h1>


        {account ? (
          <>
            <Wallet />

            <div >
              <p>Get your own Nft</p>
              <MintNftButton />
            </div>

            <div >
              <ConnectWalletButton />
            </div>
          </>
        ) : (
          <>
            <p  className="text-sm text-gray-500">Connect wallet to mint NFTs</p>{" "}
            <ConnectWalletButton />
          </>
        )}
      </div>

      {account ? (
        <>

          <p  className="text-sm text-gray-500">All swords in the module:</p>
          <PunkList />
          <PunkList displayAccount={account} />
        </>
      ) : null}
    </>
  );
};

export default MintPunks;
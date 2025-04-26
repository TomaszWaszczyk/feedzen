import React, { useState } from "react";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const EthereumAuth = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loginWithEthereum = async () => {
    if (!window.ethereum) {
      setError("MetaMask not found");
      return;
    }

    return (
        <div>
            <h2>Login with Ethereum</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={loginWithEthereum}>Login</button>
            {address && <p>Address: {address}</p>}
        </div>
    );
  }
}


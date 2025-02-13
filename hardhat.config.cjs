require("solidity-coverage");
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("@typechain/hardhat");

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      forking: process.env.MAINNET_RPC_URL ? {
        url: process.env.MAINNET_RPC_URL,
        blockNumber: 13000000
      } : undefined,
      chainId: 1337
    },
    polygon: process.env.POLYGON_RPC_URL ? {
      url: process.env.POLYGON_RPC_URL,
      accounts: [process.env.PRIVATE_KEY].filter(Boolean)
    } : undefined
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY
  },
  mocha: {
    timeout: 40000
  },
  typechain: {
    outDir: "types",
    target: "ethers-v6"
  }
};

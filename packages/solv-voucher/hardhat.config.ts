import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import '@openzeppelin/hardhat-upgrades';
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-tracer";
import "hardhat-contract-sizer";
import "@solv/v2-helper/plugins/ozUpgrade";
import "@solv/v2-helper/plugins/gasNowPrice";
import "@solv/v2-helper/plugins/otherDeployments";

import "hardhat-gas-reporter";
import "solidity-coverage";

const DEPLOYER_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY! || '0000000000000000000000000000000000000000000000000000000000000000'
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ''
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ''

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{
      version: "0.7.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1
        }
      }
    }],
  },
  networks: {
    hardhat: {
    },
    localhost: {
    },

    testnet: {
      url: ``,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    mainnet: {
      url: ``,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },

  },
  mocha: {
    timeout: 2000000
  },
};

export default config;
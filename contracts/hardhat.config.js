require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.9",
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    ropsten_allthatnode: {
      url: "https://ethereum-ropsten-rpc.allthatnode.com/" + process.env.ATN_PRIVATEKEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

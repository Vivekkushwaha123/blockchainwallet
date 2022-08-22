require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/C3v5BWVhv7Z5Zfy5nqCMCcT2W-gUb8ZF",
      accounts: [
        "d6cecb4b8713fdc2d77c0e09562687f244171830ca5168354a1adaee5a3b4fbc",
      ],
    },
  },
};

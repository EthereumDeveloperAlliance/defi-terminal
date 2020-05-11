// import { ethers } from "ethers";
const ethers = require("ethers");

console.log(ethers);

const provider = (network) => {
  return ethers.getDefaultProvider(network);
};

// module.exports = ethers;

module.exports = {
  ethers,
  provider,
};

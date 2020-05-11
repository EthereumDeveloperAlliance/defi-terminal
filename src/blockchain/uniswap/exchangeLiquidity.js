import ABI from "../../contracts/UniswapABI.json";
const ethers = require("ethers");

const CONTRACT_ADDRESS = "0x613639E23E91fd54d50eAfd6925AF2Ed6701A46b";

/* --- Local --- */

const getBlocks = async () => {
  const provider = await ethers.getDefaultProvider("mainnet");
  let contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
};

getBlocks();

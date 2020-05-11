/* --- Global --- */
import { ethers } from "ethers";

/* --- Functions --- */
export const getBlock = async () => {
  const provider = await ethers.getDefaultProvider("mainnet");
  const block = await provider.getBlockNumber();
  return block;
};

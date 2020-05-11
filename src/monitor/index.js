/* --- Global --- */
import { ethers, utils } from "ethers";
import { legos } from "@studydefi/money-legos";
import luxon from "luxon";

import UniswapABI from "../contracts/UniswapABI.json";
import VaultABI from "../contracts/DssProxy.json";

const { curvefi } = legos;

const provider = ethers.getDefaultProvider("mainnet");

/**
 * @getBlocks
 * @param {*} box
 */
export const getBlocks = async (box) => {
  // const provider = await ethers.getDefaultProvider("rinkeby");
  provider.on("block", (block) => {
    const time = new Date();
    box.log(`${block} - ${time.toLocaleTimeString()}`);
  });
};

/**
 * @name vaultInfo
 * @param {*} box
 */
export const vaultInfo = async (box, tokenAddress, decimals = 0) => {
  const ADDRESS = "0x20245abae078bce09ada57f7406fd0bfeaa0b2ed";
  const provider = await ethers.getDefaultProvider("mainnet");
  const vault = await new ethers.Contract(ADDRESS, VaultABI, provider);

  console.log(vault, "vault");
};

/**
 * @name uniswapExchangePrice
 * @param {*} box
 */
export const uniswapExchangePrice = async (box, tokenAddress, decimals = 0) => {
  const ADDRESS = tokenAddress;
  const provider = await ethers.getDefaultProvider("mainnet");
  const uniswapExchange = await new ethers.Contract(
    ADDRESS,
    UniswapABI,
    provider
  );

  try {
    const ethPrice = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("1.0")
    );
    const ethPrice10 = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("10.0")
    );
    const ethPrice100 = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("100.0")
    );
    const ethPrice1000 = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("1000.0")
    );
    const ethPrice2000 = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("2000.0")
    );
    const ethPrice3000 = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("3000.0")
    );

    box.log(
      `1: ${calculateToHuman(ethPrice, decimals)}
10: ${calculateToHuman(ethPrice10, decimals)}
100: ${calculateToHuman(ethPrice100, decimals)}
1000: ${calculateToHuman(ethPrice1000, decimals)}
2000: ${calculateToHuman(ethPrice2000, decimals)}
3000: ${calculateToHuman(ethPrice3000, decimals)}

`
    );
    return ethPrice10;
  } catch (error) {
    console.log(error);
  }

  return ethPrice1000;
};

/**
 * @name uniswapExchangeTokenPairPrice
 * @param {*} box
 */
export const uniswapExchangeTokenPairPrice = async (
  box,
  tokenAddressExchange,
  tokenAddressSecond,
  decimals = 0
) => {
  const ADDRESS = tokenAddress;
  const provider = await ethers.getDefaultProvider("mainnet");
  const uniswapExchange = await new ethers.Contract(
    ADDRESS,
    UniswapABI,
    provider
  );

  try {
    const ethPrice = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("1.0")
    );
    const ethPrice10 = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("10.0")
    );
    const ethPrice100 = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("100.0")
    );
    const ethPrice1000 = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("1000.0")
    );
    const ethPrice2000 = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("2000.0")
    );
    const ethPrice3000 = await uniswapExchange.getEthToTokenInputPrice(
      utils.parseEther("3000.0")
    );

    box.log(
      `1: ${calculateToHuman(ethPrice, decimals)}
10: ${calculateToHuman(ethPrice10, decimals)}
100: ${calculateToHuman(ethPrice100, decimals)}
1000: ${calculateToHuman(ethPrice1000, decimals)}
2000: ${calculateToHuman(ethPrice2000, decimals)}
3000: ${calculateToHuman(ethPrice3000, decimals)}

`
    );
    return ethPrice10;
  } catch (error) {
    console.log(error);
  }

  return ethPrice1000;
};

const calculateToHuman = (bigNumber, decimals = 0) => {
  return utils.formatEther(
    bigNumber.mul(decimals ? 10 ** (18 - decimals) : 1),
    {
      commify: true,
      pad: true,
    }
  );
};

export const curvePrice = async (box) => {
  // Curve finance cDai and cUSDC contract
  const curveFicDU = new ethers.Contract(
    curvefi.cDai_cUsdc.curve.address,
    curvefi.curveAbi,
    provider
  );

  try {
    const price = await curveFicDU.get_virtual_price();
    // const price = await curveFicDU.coins(1);
    console.log(price, "price");
  } catch (error) {
    console.log(error);
  }

  // console.log(curveFicDU);
};

vaultInfo();

/* --- Global --- */
var blessed = require("neo-blessed");
const monitor = require("../monitor/index");

import { defaults } from "./defaults";

/* --- Local --- */
/**
 * @name UniswapDAIScreen
 * @version 0.0.1
 * @description The primary analytics dashboard screen.
 */
const UniswapDAIScreen = (screen) => {
  var box = blessed.log({
    label: "Uniswap DAI Prices",
    top: "19%",
    left: "75%",
    width: "25%",
    height: "20%",
    ...defaults,
  });

  const tokenExchange = "0x2a1530C4C41db0B0b2bB646CB5Eb1A67b7158667";
  monitor.uniswapExchangePrice(box, tokenExchange);

  return box;
};

module.exports = UniswapDAIScreen;

// export default UniswapDAIScreen;

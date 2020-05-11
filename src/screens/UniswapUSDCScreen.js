/* --- Global --- */
var blessed = require("neo-blessed");
const monitor = require("../monitor/index");

import { defaults } from "./defaults";

/* --- Local --- */
/**
 * @name UniswapUSDCScreen
 * @version 0.0.1
 * @description The primary analytics dashboard screen.
 */
const UniswapUSDCScreen = (screen) => {
  var box = blessed.log({
    label: "Uniswap USDC Prices",
    top: "39%",
    left: "75%",
    width: "25%",
    height: "20%",
    ...defaults,
  });

  const tokenExchange = "0x97deC872013f6B5fB443861090ad931542878126";
  monitor.uniswapExchangePrice(box, tokenExchange, 6);

  return box;
};

module.exports = UniswapUSDCScreen;

// export default UniswapUSDCScreen;

/* --- Global --- */
var blessed = require("neo-blessed");
const ethers = require("ethers");

const monitor = require("../monitor/index");
/* --- Local --- */
console.log(monitor);
/**
 * @name CheatsheetScreen
 * @version 0.0.1
 * @description The primary analytics dashboard screen.
 */
const CheatsheetScreen = (screen) => {
  var box = blessed.log({
    label: "Shortcuts",
    top: "0%",
    left: "75%",
    width: "25%",
    height: "10%",
    tags: true,
    border: {
      type: "line",
    },
    style: {
      fg: "white",
      border: {
        fg: "#f0f0f0",
      },
      hover: {},
    },
    keys: true,
    vi: true,
    alwaysScroll: true,
    scrollable: true,
    scrollbar: {
      style: {
        bg: "yellow",
      },
    },
  });

  box.setContent(
    `Scroll Up: j
Scroll Down: k
Top: g
Bottom: G
Secrets: S`
  );

  // screen.render();
  box.scroll(0);
  // // If our box is clicked, change the content.
  // box.on("click", function (data) {
  // box.setContent("{center}Some different {red-fg}content{/red-fg}.{/center}");
  //   screen.render();
  // });

  return box;
};

module.exports = CheatsheetScreen;

// export default CheatsheetScreen;

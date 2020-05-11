/* --- Global --- */
// import { provider } from "../blockchain/ethers";
// const Ethers = require("../blockchain/ethers");
var blessed = require("neo-blessed");

/* --- Local --- */

// console.log(ethers, "provider");

// getBlocks();

/**
 * @name PrimaryScreen
 * @version 0.0.1
 * @description The primary analytics dashboard screen.
 */
const PrimaryScreen = (screen) => {
  var box = blessed.box({
    label: "Blockchain",
    top: "0",
    left: "0",
    width: "75%",
    height: "80%",
    content: `Hello {bold}world{/bold}! `,
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
  });

  // If our box is clicked, change the content.
  box.on("click", function (data) {
    box.setContent("{center}Some different {red-fg}content{/red-fg}.{/center}");
    screen.render();
  });

  // box.on('log')

  // If box is focused, handle `enter`/`return` and give us some more content.
  box.key("enter", function (ch, key) {
    box.setContent(
      "{right}Even different {black-fg}content{/black-fg}.{/right}\n"
    );
    box.setLine(1, "bar");
    box.insertLine(1, "foo");
    screen.render();
  });

  return box;
};

module.exports = PrimaryScreen;

// export default PrimaryScreen;

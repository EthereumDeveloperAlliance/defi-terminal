/* --- Global --- */
var blessed = require("neo-blessed");

/* --- Local --- */
const PrimaryScreen = require("./screens/PrimaryScreen");
const EventsScreen = require("./screens/EventsScreen");
const CheatsheetScreen = require("./screens/CheatsheetScreen");
const UniswapDAIScreen = require("./screens/UniswapDAIScreen");
const UniswapUSDCScreen = require("./screens/UniswapUSDCScreen");
const UniswapUSDCandDAIScreen = require("./screens/UniswapUSDCandDAIScreen");

/* --- Configuration --- */
var screen = blessed.screen({
  smartCSR: true,
});

/**
 * @name AnalyticsDashboard
 */
screen.title = "DeFi Monitor";

/* --- Initialize Screens --- */
screen.append(PrimaryScreen(screen));
screen.append(CheatsheetScreen(screen));
screen.append(EventsScreen(screen));
screen.append(UniswapDAIScreen(screen));
screen.append(UniswapUSDCScreen(screen));
screen.append(UniswapUSDCandDAIScreen(screen));

// Quit on Escape, q, or Control-C.
screen.key(["escape", "q", "C-c"], function (ch, key) {
  return process.exit(0);
});

// Render the screen.
screen.render();

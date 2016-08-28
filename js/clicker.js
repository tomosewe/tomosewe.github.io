/* eslint linebreak-style: ["error", "windows"]*/
/* global $ */
/* global document */
/* global window */

var clickCount = 0;
var clickIncrement = 1;
var feedingSpoons = 0;


$(document).ready(function() {
  setupInterface();
});

/**
 * Sets up the clicker interface.
 */
function setupInterface() {
  $('#js-clicker-button').click(function() {
    incrementClicks(1);
  });
  $('#js-click-power').click(function() {
    clickIncrement += 1;
    $('#js-click-power-display').text(clickIncrement);
  });
  $('#js-buy-clickers').click(function() {
    feedingSpoons += 1;
    $('#js-helperclicks-display').text(feedingSpoons);
  });
  $('#js-buy-clickers').click(function() {
    sellClickers();
  });
}

/**
 * Increments the clicks
 * @param {number} clickNumber - the number of clicks
 */
function incrementClicks(clickNumber) {
  clickCount += clickNumber * clickIncrement;
  $('#js-click-display').text(clickCount);
}

/**
 * Buy spoons
 */
function sellClickers() {
  var costOfSpoon = Math.floor(10 * Math.pow(1.1, feedingSpoons));
  if (clickCount >= costOfSpoon) {
    feedingSpoons += 1;
    clickCount -= costOfSpoon;
    $('#js-helperspoons-display').text(feedingSpoons);
    var nextCost = Math.floor(10 * Math.pow(1.1, feedingSpoons));
    $('#js-spoon-cost').text(nextCost);
  }
}

window.setInterval(function() {
  incrementClicks(feedingSpoons);
}, 1000);

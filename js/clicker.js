/* eslint linebreak-style: ["error", "windows"]*/
/* global $ */
/* global document */

$(document).ready(function() {
  setupInterface();
});

/**
 * Sets up the clicker interface.
 */
function setupInterface() {
  $('#js-clicker-button').click(function() {
    console.log("boo");
  });
}


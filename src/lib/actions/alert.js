'use strict';

var extensionSettings = turbine.getExtensionSettings();

module.exports = function (settings) {
  if (settings.message && settings.delay) {
    setTimeout(function() {
      alert(settings.message)
    }, settings.delay);
  }
}
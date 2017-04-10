var self = require("sdk/self");
var utils = require("./lib/utils");
var ui = require("./lib/ui");
var zotero = require("./lib/zotero");

var logger = new utils.Logger(utils.getWindow().Zotero);

function main(options, callbacks) {
  logger.info("zotero-voyant-export loaded.");
  ui.insertExportMenuItem(zotero.doExport);
}

function onUnload(reason) {
  ui.removeExportMenuItem();
}

exports.main = main;
exports.onUnload = onUnload;

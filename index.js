//imports
import {simple} from "justo";

//internal data
const NS = "org.justojs.plugin.apt";
var available, install, installed, list, remove, update, upgrade;

//api
module.exports = {
  get available() {
    if (!available) available = simple({ns: NS, name: "available"}, require("./lib/available").default);
    return available;
  },

  get install() {
    if (!install) install = simple({ns: NS, name: "install"}, require("./lib/install").default);
    return install;
  },

  get installed() {
    if (!installed) installed = simple({ns: NS, name: "installed"}, require("./lib/installed").default);
    return installed;
  },

  get list() {
    if (!list) list = simple({ns: NS, name: "list"}, require("./lib/list").default);
    return list;
  },

  get remove() {
    if (!remove) remove = simple({ns: NS, name: "remove"}, require("./lib/remove").default);
    return remove;
  },

  get uninstall() {
    return this.remove;
  },

  get update() {
    if (!update) update = simple({ns: NS, name: "update"}, require("./lib/update").default);
    return update;
  },

  get upgrade() {
    if (!upgrade) upgrade = simple({ns: NS, name: "upgrade"}, require("./lib/upgrade").default);
    return upgrade;
  }
};

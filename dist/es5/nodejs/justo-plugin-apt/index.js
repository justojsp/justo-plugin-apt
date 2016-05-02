"use strict";
var _justo = require("justo");


var NS = "org.justojs.plugin.apt";
var available, install, list, remove, update, upgrade;


module.exports = { 
  get available() {
    if (!available) available = (0, _justo.simple)({ ns: NS, name: "available" }, require("./lib/available").default);
    return available;}, 


  get install() {
    if (!install) install = (0, _justo.simple)({ ns: NS, name: "install" }, require("./lib/install").default);
    return install;}, 


  get list() {
    if (!list) list = (0, _justo.simple)({ ns: NS, name: "list" }, require("./lib/list").default);
    return list;}, 


  get remove() {
    if (!remove) remove = (0, _justo.simple)({ ns: NS, name: "remove" }, require("./lib/remove").default);
    return remove;}, 


  get uninstall() {
    return this.remove;}, 


  get update() {
    if (!update) update = (0, _justo.simple)({ ns: NS, name: "update" }, require("./lib/update").default);
    return update;}, 


  get upgrade() {
    if (!upgrade) upgrade = (0, _justo.simple)({ ns: NS, name: "upgrade" }, require("./lib/upgrade").default);
    return upgrade;} };
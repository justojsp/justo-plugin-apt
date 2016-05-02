"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 





op;var _child_process = require("child_process");var _child_process2 = _interopRequireDefault(_child_process);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params) {
  var opts, args, res;


  if (params.length >= 1) opts = Object.assign({}, params[0]);
  if (!opts) opts = {};
  if (!opts.hasOwnProperty("names")) opts.names = [];
  if (typeof opts.names == "string") opts.names = [opts.names];
  if (opts.name) opts.names.push(opts.name);


  args = ["install", "-y"];
  if (opts.reinstall) args.push("--reinstall");var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
    for (var _iterator = opts.names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var pkg = _step.value;args.push(pkg);}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}


  res = _child_process2.default.spawnSync("apt", args);

  if (opts.output) console.log(res.stdout.toString());
  if (res.status) throw new Error(res.stdout.toString());


  return res.status;}
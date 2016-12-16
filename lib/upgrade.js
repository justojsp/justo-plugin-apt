//import
import child_process from "child_process";

/**
 * Task operation.
 */
export default function op(params, console) {
  var opts, args, res;

  //(1) arguments
  if (params.length >= 1) opts = Object.assign({}, params[0]);
  if (!opts) opts = {};
  if (!opts.hasOwnProperty("names")) opts.names = [];
  if (typeof(opts.names) == "string") opts.names = [opts.names];
  if (opts.name) opts.names.push(opts.name);

  //(2) get packages to upgrade
  args = ["upgrade", "-y"];
  for (let pkg of opts.names) args.push(pkg);

  //(3) install
  res = child_process.spawnSync("apt", args);

  if (opts.output) console.log(res.stdout.toString());
  if (res.status) throw new Error(res.stderr.toString());

  //(4) return
  return res.status;
}

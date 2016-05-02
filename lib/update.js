//imports
import child_process from "child_process";

/**
 * Task operation.
 */
export default function op(params) {
  var opts, res;

  //(1) arguments
  if (params.length >= 1) opts = params[0];
  if (!opts) opts = {};

  //(2) update
  res = child_process.spawnSync("apt", ["update"]);

  if (opts.output) console.log(res.stdout.toString());
  if (res.status) throw new Error(res.stdout.toString());

  //(3) return
  return res.status;
}

//import
import child_process from "child_process";

/**
 * Task operation.
 */
export default function op(params) {
  var opts, args, res;

  //(1) arguments
  if (params.length >= 1) opts = Object.assign({}, params[0]);
  if (!opts) opts = {};
  if (typeof(opts.names) == "string") opts.names = [opts.names];
  if (!opts.hasOwnProperty("names")) opts.names = [];
  if (opts.name) opts.names.push(opts.name);

  //(2) get packages to install
  args = ["list"];
  for (let name of opts.names) args.push(name);

  //(3) install
  if (opts.names.length === 0) {
    res = false;
  } else {
    res = child_process.spawnSync("apt", args);

    if (res.status) {
      throw new Error(res.stdout.toString());
    } else {
      let output = res.output.toString();

      res = true;
      for (let name of opts.names) {
        let pattern = new RegExp(`\n${name}/.+`);

        if (!pattern.test(output)) {
          res = false;
          break;
        }
      }
    }
  }

  //(4) return
  return res;
}

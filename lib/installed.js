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

  //(2) get packages
  args = ["list"];
  if (opts.installed) args.push("--installed");
  for (let name of opts.names) args.push(name);

  //(3) check
  if (opts.names.length === 0) {
    res = false;
  } else {
    res = child_process.spawnSync("apt", args);

    if (res.status) {
      throw new Error(res.stderr.toString());
    } else {
      let output = res.output.toString(), pkgs = [];

      for (let ln of output.split("\n")) {
        const pattern = /^(.+)\/([a-zA-Z0-9]+).+/;

        if (pattern.test(ln)) {
          let pkg = pattern.exec(ln).slice(1, 3);
          pkgs.push({name: pkg[0], release: pkg[1], installed: /\[.*installed.*\]/.test(ln)});
        }
      }

      if (pkgs.length == opts.names.length) {
        res = true;

        for (let pkg of pkgs) {
          if (!pkg.installed) {
            res = false;
            break;
          }
        }
      } else {
        res = false;
      }
    }
  }

  //(4) return
  return res;
}

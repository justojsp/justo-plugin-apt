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
  if (!opts.hasOwnProperty("terms")) opts.terms = [];
  if (opts.term) opts.terms.push(opts.term);

  //(2) get packages to install
  args = ["list"];
  if (opts.installed) args.push("--installed");
  if (opts.upgradable) args.push("--upgradable");
  for (let term of opts.terms) args.push(term);

  //(3) install
  res = child_process.spawnSync("apt", args);

  if (res.status) {
    throw new Error(res.stderr.toString());
  } else {
    let output = res.output.toString();

    res = [];
    for (let ln of output.split("\n")) {
      const pattern = /^(.+)\/([a-zA-Z0-9]+).+/;

      if (pattern.test(ln)) {
        let pkg = pattern.exec(ln).slice(1, 3);
        res.push({name: pkg[0], release: pkg[1], installed: /\[.*installed.*\]/.test(ln)});
      }
    }
  }

  //(4) return
  return res;
}

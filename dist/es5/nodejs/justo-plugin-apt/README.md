[![NPM version](http://img.shields.io/npm/v/justo-plugin-apt.svg)](https://www.npmjs.org/package/justo-plugin-apt)
[![Build Status](https://travis-ci.org/justojsp/justo-plugin-apt.svg?branch=master)](https://travis-ci.org/justojsp/justo-plugin-apt)
[![Dependency Status](https://david-dm.org/justojsp/justo-plugin-apt.svg)](https://david-dm.org/justojsp/justo-plugin-apt)
[![devDependency Status](https://david-dm.org/justojsp/justo-plugin-apt/dev-status.svg)](https://david-dm.org/justojsp/justo-plugin-apt#info=devDependencies)

Plugin for *APT* (*Advanced Package Tool*).

*Proudly made with ♥ in Valencia, Spain, EU.*

# Install

```
npm install justo-plugin-apt
```

# Dependencies

This plugin requires:

- The `apt` command.

# Use

```
const apt = require("justo-plugin-apt");
```

# Tasks

This plugin is composite.

## update task

Update the package index:

```
update(justoOpts)
update(justoOpts, opts : object)
```

The `opts` parameter:

- `output` (boolean). Display the output returned by `apt`? Default: `false`.

Example:

```
apt.update("Update package index");
apt.update("Update package index", {output: true});
```

## available task

Check whether packages are available:

```
available(justoOpts, opts : object) : boolean
```

The `opts` parameter:

- `name` (string). Package name.
- `names` (string[]). Package names.

Example:

```
if (apt.available("Check if cURL is available", {name: "curl"})) {
  apt.install("Install cURL", {name: "curl"});
}
```

## installed task

Check whether packages are installed:

```
installed(justoOpts, opts : object) : boolean
```

The `opts` parameter:

- `name` (string). Package name.
- `names` (string[]). Package names.

Example:

```
if (apt.installed("Check whether cURL installled", {name: "curl"})) {
  apt.uninstall("Uninstall CURL", {name: "curl"});
}
```

## list task

Return the package list:

```
list(justoOpts, opts : object) : object[]
```

The `opts` parameter:

- `installed` (boolean). Only installed ones? Default: `false`.
- `upgradable` (boolean). Only upgradable ones? Default: `false`.
- `term` (string). The term to filter.
- `terms` (string[]). The terms to filter.

Example:

```
var pkgs;

//all
pkgs = apt.list("Get available packages");

//installed packages
pkgs = apt.list("Get installed package", {installed: true});

//specific packages
pkgs = apt.list("Get database packages", {terms: ["couchdb", "postgresql"]});
```

## install task

Install packages:

```
install(justoOpts, opts : object)
```

The `opts` parameter:

- `name` (string). Package name.
- `names` (string[]). Package names.
- `reinstall` (boolean). Reinstall? Default: `false`.
- `allowUnauthenticated` (boolean). --allow-unauthenticated? Default: `false`.
- `output` (boolean). Display the output? Default: `false`.

Example:

```
//one package
apt.install("Install CouchDB", {name: "couchdb"});
apt.install("Install ArangoDB", {name: "arangodb3", allowUnauthenticated: true});

//several packages
apt.install("Install databases", {names: ["couchdb", "postgresql"]});

//reinstall packages
apt.install("Reinstall CouchDB", {name: ["couchdb", "postgresql"], reinstall: true});
```

## upgrade task

Upgrade packages:

```
upgrade(justoOpts)
upgrade(justoOpts, opts : object)
```

The `opts` parameter:

- `name` (string). Package name.
- `names` (string[]). Package names.
- `output` (boolean). Display the output? Default: `false`.

Example:

```
//one package
apt.upgrade("Upgrade CouchDB", {name: "couchdb"});

//several packages
apt.upgrade("Upgrade databases", {names: ["couchdb", "postgresql"]});

//all packages
apt.upgrade("Upgrade all");
```

## remove task

Uninstall packages:

```
remove(justoOpts, opts : object)
```

Alias: `uninstall`.

The `opts` parameter:

- `name` (string). Package name.
- `names` (string[]). Package names.
- `purge` (boolean). Purge? Default: `false`.

Example:

```
//purge package
apt.uninstall("Uninstall CouchDB", {name: "couchdb", purge: true});
```

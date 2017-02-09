# yarn-notes
simple yarn notes

## Table of Content


## Adding a dependency   

`yarn add <packageName>`

## Adding a dev dependency

`yarn add <packageName> --dev`

## Removing a dependency

`yarn remove <packageName>`

**Little note about yarn.lock:**
You will notice that as soon as you add any package yarn.lock file is created. This file contains a log about modules that are installed or removed or updated. If you will look closely the version of express or any other module that you have installed starts with a `^` carot symbol which doesnt represent a particular version but it represent a range. yarn.lock file make it deterministic and tell which version to install. It also lets you install dev-dependency. It will change every time when there is any change like installation, removal, updation of any package.


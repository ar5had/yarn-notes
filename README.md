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

## Upgrade or downgrade dependency 
`yarn upgrade < packageName@version>`

##  Find which packages are outdated
`yarn outdated`

## Upgrade all dependency
`yarn upgrade`

## Install all packages of cloned repo
`yarn install`

**Local Caching in Yarn:** yarn supports local caching, it can reinstall dependency  from local cache to achieve better performance..

## To remove local cache
`yarn cache clean`

## Scripts in yarn
Add your scripts in the same way as you would have add using npm in package.json.
`yar run` list all the scripts that can be run

`yarn run <scriptName>` to run a script.

## Global module
`yarn global <add|remove|upgrade> <package|package@version>`

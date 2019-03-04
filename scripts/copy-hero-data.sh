#!/bin/sh
cwd=$(pwd)
if [[ ! -d ${cwd}/mog ]]; then
  git clone https://github.com/duckness/Mask-of-Goblin.git mog
fi
if [[ -d ${cwd}/mog ]]; then
  cd mog
  git pull
  cd ..
fi
node ./scripts/js/rewrite-hero-data.js


#!/bin/sh
# Clones MaskOfGoblin and copies its assets
cwd=$(pwd)
if [[ ! -d ${cwd}/mog ]]; then
  git clone https://github.com/duckness/Mask-of-Goblin.git mog
fi
if [[ -d ${cwd}/mog ]]; then
  cd mog
  git pull
  cd ..
fi
# Create directory if it does not exist
if [[ ! -d ${cwd}/src/assets/images/hero ]]; then
  mkdir ${cwd}/src/assets/images/hero
fi
cp -r mog/src/components/hero/images/* ${cwd}/src/assets/images/hero/
cd ${cwd}/src/assets/images/hero/
find . -iname "hero.png" -exec rename hero.png image.png '{}' \;
find . -iname "s1UT.png" -exec rename s1UT.png unique-treasure-1.png '{}' \;
find . -iname "s2UT.png" -exec rename s2UT.png unique-treasure-2.png '{}' \;
find . -iname "s3UT.png" -exec rename s3UT.png unique-treasure-3.png '{}' \;
find . -iname "s4UT.png" -exec rename s4UT.png unique-treasure-4.png '{}' \;
find . -iname "UW.png" -exec rename UW.png unique-weapon.png '{}' \;
find . -iname "s1.png" -exec rm '{}' \;
find . -iname "s2.png" -exec rm '{}' \;
find . -iname "s3.png" -exec rm '{}' \;
find . -iname "s4.png" -exec rm '{}' \;
rm -rf classes/

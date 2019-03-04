#!/bin/sh
# convert assets to webp format
cwd=$(pwd)
cd ${cwd}/src/assets/images/hero/
find . -iname "image.png" -execdir cwebp '{}' -o image.webp  -quiet \;
find . -iname "unique-treasure-1.png" -execdir cwebp '{}' -o unique-treasure-1.webp -quiet  \;
find . -iname "unique-treasure-2.png" -execdir cwebp '{}' -o unique-treasure-2.webp -quiet  \;
find . -iname "unique-treasure-3.png" -execdir cwebp '{}' -o unique-treasure-3.webp -quiet  \;
find . -iname "unique-treasure-4.png" -execdir cwebp '{}' -o unique-treasure-4.webp -quiet  \;
find . -iname "unique-weapon.png" -execdir cwebp '{}' -o unique-weapon.webp  -quiet \;

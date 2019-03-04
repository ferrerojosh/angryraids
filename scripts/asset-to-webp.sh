#!/bin/sh
# convert assets to webp format
cwd=$(pwd)
cd ${cwd}/src/assets/images/hero/
find . -iname "image.png" -execdir cwebp '{}' -o image.webp  \;
find . -iname "unique-treasure-1.png" -execdir cwebp '{}' -o unique-treasure-1.webp  \;
find . -iname "unique-treasure-2.png" -execdir cwebp '{}' -o unique-treasure-2.webp  \;
find . -iname "unique-treasure-3.png" -execdir cwebp '{}' -o unique-treasure-3.webp  \;
find . -iname "unique-treasure-4.png" -execdir cwebp '{}' -o unique-treasure-4.webp  \;
find . -iname "unique-weapon.png" -execdir cwebp '{}' -o unique-weapon.webp \;
# Delete existing PNG after
find . -iname "image.png" -execdir rm '{}'  \;
find . -iname "unique-treasure-1.png" -execdir rm '{}'  \;
find . -iname "unique-treasure-2.png" -execdir rm '{}'  \;
find . -iname "unique-treasure-3.png" -execdir rm '{}'  \;
find . -iname "unique-treasure-4.png" -execdir rm '{}'  \;
find . -iname "unique-weapon.png" -execdir rm '{}'  \;

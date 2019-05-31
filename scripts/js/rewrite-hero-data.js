// Hi Mom! Remember, all data/images from Mask of Goblin as stated in README.md
const heroData = require('../../mog/src/data.json');
const heroCopy = JSON.parse(JSON.stringify(heroData.hero));
const fs = require('fs');

for (const k of Object.keys(heroCopy)) {
  // Retrieve hero info
  const heroInfo = require(`../../mog/public/i18n/English/hero/${k}.json`);

  delete heroCopy[k].index;
  delete heroCopy[k].auto;
  delete heroCopy[k].s1;
  delete heroCopy[k].s2;
  delete heroCopy[k].s3;
  delete heroCopy[k].s4;
  delete heroCopy[k].dark;
  delete heroCopy[k].light;
  delete heroCopy[k].t5;
  delete heroCopy[k].position;

  heroCopy[k].name = heroInfo.name;
  heroCopy[k].title = heroInfo.title;
  heroCopy[k].uniqueWeapon = heroInfo.uw.name;
  heroCopy[k].uniqueTreasure1 = heroInfo.s1.ut.name;
  heroCopy[k].uniqueTreasure2 = heroInfo.s2.ut.name;
  heroCopy[k].uniqueTreasure3 = heroInfo.s3.ut.name;
  heroCopy[k].uniqueTreasure4 = heroInfo.s4.ut.name;

  heroCopy[k].stats = {
    attributes: {
      manaAtk: heroCopy[k].mpatk,
      manaSec: heroCopy[k].mpsec,
    },
  };

  delete heroCopy[k].mpatk;
  delete heroCopy[k].mpsec;
}

const output = JSON.stringify(heroCopy, null, 2);

fs.writeFile(__dirname + '/../../src/app/modules/kings-raid/services/data/hero.data.json', output, function(err) {
  if(err) {
    return console.log(err);
  }
  console.log('Hero data copied!');
});


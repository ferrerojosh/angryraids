const fs = require('fs');

const gitHash = () => {
  const rev = fs.readFileSync(`${__dirname}/../../.git/HEAD`).toString();
  if (rev.indexOf(':') === -1) {
    return rev;
  } else {
    const path = `${__dirname}/../../.git/${rev.substring(5)}`;
    return fs.readFileSync(path.trim()).toString();
  }
};

const gitInfo = {
  hash: gitHash().substr(0, 7)
};

fs.writeFileSync(`${__dirname}/../../src/environments/git-info.json`, JSON.stringify(gitInfo));

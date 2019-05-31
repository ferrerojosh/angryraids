import * as packageInfo from '../../package.json';
import * as gitInfo from './git-info.json';

export const environment = {
  production: true,
  version: `${packageInfo.version}-alpha+${gitInfo.hash}`
};

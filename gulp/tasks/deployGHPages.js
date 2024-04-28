import ghPages from 'gh-pages';
import path from 'path';

export const deployGHPages = (cb) => {
  ghPages.publish(path.join(process.cwd(), app.path.buildFolder), cb);
};

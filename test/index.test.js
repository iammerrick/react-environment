import path from 'path';
import glob from 'glob';
import { transformFileSync } from 'babel-core';
import plugin from '../src';

describe('react-environment', () => {
  glob.sync(path.join(__dirname, 'fixtures/*.js')).forEach((path) => {
    console.log(path);
    it(`should ${path}`, () => {
      const actual = transformFileSync(path, {
        presets: ['es2015', 'react']
      }).code;

      expect(actual).toMatchSnapshot();
    });
  });
});

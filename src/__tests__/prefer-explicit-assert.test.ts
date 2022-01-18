import { applyTransform } from 'jscodeshift/dist/testUtils';
import * as transform from '../prefer-explicit-assert';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { FileInfo } from 'jscodeshift';

type fileType = 'input' | 'output';

describe('Prefer Explict Assertion: ', () => {
  test('getBy* call expressions should be asserted on', ()=> {
    const expected = getFile('callExpression', 'output').source;
    const transformOptions = {};
    const output = applyTransform(transform, transformOptions, getFile('callExpression', 'input'));
    expect(output).toBe(expected);
  });

  test('screen.getBy* member expressions should be asserted on', ()=> {
    const expected = getFile('memberExpression', 'output').source;
    const transformOptions = {};
    const output = applyTransform(transform, transformOptions, getFile('memberExpression', 'input'));
    expect(output).toBe(expected);
  });

  test('screen.findBy* memeber expressions should be asserted on', ()=> {
    const expected = getFile('awaitMemberExpression', 'output').source;
    const transformOptions = {};
    const output = applyTransform(transform, transformOptions, getFile('awaitMemberExpression', 'input'));
    expect(output).toBe(expected);
  });
  
  test('findBy* call expressions should be asserted on', ()=> {
    const expected = getFile('awaitCallExpression', 'output').source;
    const transformOptions = {};
    const output = applyTransform(transform, transformOptions, getFile('awaitCallExpression', 'input'));
    expect(output).toBe(expected);
  });
});

function getFile(moduleName: string, type: fileType): FileInfo {
  const MODULE_EXTS = ['ts', 'tsx']
  const paths = MODULE_EXTS.map(ext =>
    resolve(__dirname, `../__testfixtures__/${moduleName}.${type}.${ext}`),
  )
  const fixturePath = paths.find(path => existsSync(path))
  if (!fixturePath) {
    throw new Error(`Unable to find fixture ${moduleName}`)
  }

  return {
    path: fixturePath,
    source: readFileSync(fixturePath).toString(),
  }
}
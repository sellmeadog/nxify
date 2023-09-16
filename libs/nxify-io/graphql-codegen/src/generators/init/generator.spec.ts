import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readJson, writeJson } from '@nx/devkit';

import { initGenerator } from './generator';
import {
  cliVersion,
  clinetPresetVersion,
  graphqlVersion,
} from '../../lib/versions';

describe('init generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
    writeJson(tree, 'package.json', {});
  });

  it('should add GraphQL Code Generator dev dependencies', async () => {
    await initGenerator(tree, {});

    const packageJson = readJson(tree, 'package.json');

    expect(packageJson.dependencies).toEqual({
      graphql: graphqlVersion,
    });

    expect(packageJson.devDependencies).toEqual({
      '@graphql-codegen/cli': cliVersion,
      '@graphql-codegen/client-preset': clinetPresetVersion,
    });
  });
});

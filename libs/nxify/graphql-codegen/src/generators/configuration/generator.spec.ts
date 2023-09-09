import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import {
  Tree,
  addProjectConfiguration,
  readProjectConfiguration,
} from '@nx/devkit';

import { configurationGenerator } from './generator';

describe('configuration generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate default codegen.ts', async () => {
    addProjectConfiguration(tree, 'mylib', {
      name: 'mylib',
      root: 'mylib',
      sourceRoot: 'mylib/src',
    });

    await configurationGenerator(tree, { project: 'mylib' });
    const codegenTs = tree.read('mylib/codegen.ts', 'utf-8');

    expect(codegenTs).toMatchInlineSnapshot(`
      "import { CodegenConfig } from '@graphql-codegen/cli';
      import { createGlobPatternsForDependencies } from '@nx/js/src/utils/generate-globs';

      const { SCHEMA_ENDPOINT } = process.env;

      const config: CodegenConfig = {
        schema: SCHEMA_ENDPOINT,
        documents: [
          ...createGlobPatternsForDependencies(
            __dirname,
            'lib/{client,server}/**/*!(*.stories|*.spec).{ts,tsx}'
          ),
          'mylib/src/lib/{client,server}/**/*!(*.stories|*.spec).{ts,tsx}',
        ],
        generates: {
          'mylib/src/lib/generated': {
            preset: 'client',
            presetConfig: {
              fragmentMasking: { unmaskFunctionName: 'fragmentData' },
            },
          },
        },
        ignoreNoDocuments: true,
      };

      export default config;
      "
    `);
  });

  it('should generate codegen.ts with overrides', async () => {
    addProjectConfiguration(tree, 'mylib', {
      name: 'mylib',
      root: 'mylib',
      sourceRoot: 'mylib/src',
    });

    await configurationGenerator(tree, {
      project: 'mylib',
      outputPath: 'src/generated',
      schema: 'https://data.io/graphql',
      skipClientPreset: true,
    });

    const codegenTs = tree.read('mylib/codegen.ts', 'utf-8');

    expect(codegenTs).toMatchInlineSnapshot(`
      "import { CodegenConfig } from '@graphql-codegen/cli';
      import { createGlobPatternsForDependencies } from '@nx/js/src/utils/generate-globs';

      const config: CodegenConfig = {
        schema: 'https://data.io/graphql',
        documents: [
          ...createGlobPatternsForDependencies(
            __dirname,
            'lib/{client,server}/**/*!(*.stories|*.spec).{ts,tsx}'
          ),
          'mylib/src/lib/{client,server}/**/*!(*.stories|*.spec).{ts,tsx}',
        ],
        generates: {
          'mylib/src/generated': {},
        },
        ignoreNoDocuments: true,
      };

      export default config;
      "
    `);
  });

  it('should add codegen target', async () => {
    addProjectConfiguration(tree, 'mylib', {
      name: 'mylib',
      root: 'mylib',
      sourceRoot: 'mylib/src',
    });

    await configurationGenerator(tree, { project: 'mylib' });
    const project = readProjectConfiguration(tree, 'mylib');

    expect(project.targets.codegen).toEqual({
      executor: '@nxify/graphql-codegen:codegen',
      options: {
        config: '{projectRoot}/codegen.ts',
      },
      dependsOn: ['^codegen'],
    });
  });

  it('should throw when validation fails', async () => {
    addProjectConfiguration(tree, 'mylib', {
      name: 'mylib',
      root: 'mylib',
      sourceRoot: 'mylib/src',
      targets: { codegen: {} },
    });

    await expect(
      configurationGenerator(tree, { project: 'mylib' })
    ).rejects.toThrow(
      'Project "mylib" already has a "codegen" target. Pass --skipValidation to ignore this error.'
    );
  });

  it('should overwrite codegen target when validation is skipped', async () => {
    addProjectConfiguration(tree, 'mylib', {
      name: 'mylib',
      root: 'mylib',
      sourceRoot: 'mylib/src',
      targets: { codegen: { executor: 'nx:run-commands' } },
    });

    await configurationGenerator(tree, {
      project: 'mylib',
      skipValidation: true,
    });

    const project = readProjectConfiguration(tree, 'mylib');

    expect(project.targets.codegen).toEqual({
      executor: '@nxify/graphql-codegen:codegen',
      options: {
        config: '{projectRoot}/codegen.ts',
      },
      dependsOn: ['^codegen'],
    });
  });
});

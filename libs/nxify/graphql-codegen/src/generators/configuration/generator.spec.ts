import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import {
  Tree,
  addProjectConfiguration,
  readProjectConfiguration,
} from '@nx/devkit';

import { configurationGenerator } from './generator';
import { ConfigurationGeneratorSchema } from './schema';
import { join } from 'path';

describe('configuration generator', () => {
  let tree: Tree;
  // const options: ConfigurationGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
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

      const config: CodegenConfig = {
        schema: process.env.GRAPH_ENDPOINT,
        documents: [
          ...createGlobPatternsForDependencies(
            __dirname,
            'lib/{client,server}/**/*!(*.stories|*.spec).{ts,tsx}'
          ),
          'mylib/src/lib/{client,server}/**/*!(*.stories|*.spec).{ts,tsx}',
        ],
        generates: {
          'mylib/src/lib/generated/': {
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
});

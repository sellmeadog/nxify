import { CodegenConfig } from '@graphql-codegen/cli';
import { createGlobPatternsForDependencies } from '@nx/js/src/utils/generate-globs';

const { KJD_HYGRAPH_ENDPOINT } = process.env;

const config: CodegenConfig = {
  schema: KJD_HYGRAPH_ENDPOINT,
  documents: [
    ...createGlobPatternsForDependencies(
      __dirname,
      'lib/**/*!(*.stories|*.spec).{graphql,ts,tsx}'
    ),
    'libs/kjd/ui-page-fragments/src/lib/{client,server}/**/*!(*.stories|*.spec).{graphql,ts,tsx}',
  ],
  generates: {
    'libs/kjd/ui-page-fragments/src/lib/generated/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'fragmentData' },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;

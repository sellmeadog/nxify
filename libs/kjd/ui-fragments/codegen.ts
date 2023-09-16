import { CodegenConfig } from '@graphql-codegen/cli';
import { createGlobPatternsForDependencies } from '@nx/js/src/utils/generate-globs';

const { KJD_HYGRAPH_ENDPOINT } = process.env;

const config: CodegenConfig = {
  schema: KJD_HYGRAPH_ENDPOINT,
  documents: [
    ...createGlobPatternsForDependencies(
      __dirname,
      'lib/{client,server}/**/*!(*.stories|*.spec).{ts,tsx}'
    ),
    'libs/kjd/ui-fragments/src/lib/{client,server}/**/*!(*.stories|*.spec).{ts,tsx}',
  ],
  generates: {
    'libs/kjd/ui-fragments/src/lib/generated/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'unmaskFragment' },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;

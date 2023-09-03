import { CodegenConfig } from '@graphql-codegen/cli';
import { createGlobPatternsForDependencies } from '@nx/js/src/utils/generate-globs';

const { KJD_HYGRAPH_ENDPOINT } = process.env;

const documents = createGlobPatternsForDependencies(
  __dirname,
  'lib/{client,server}/**/*!(*.stories|*.spec).{ts,tsx}'
);

console.log(documents);

const config: CodegenConfig = {
  schema: KJD_HYGRAPH_ENDPOINT,
  documents: [
    ...documents,
    'libs/kjd/feature-home/src/lib/{client,server}/**/*!(*.stories|*.spec).{ts,tsx}',
  ],
  generates: {
    'libs/kjd/feature-home/src/lib/generated/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'fragmentData' },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;

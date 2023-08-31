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
    'libs/kjd/feature-blog/src/lib/{client,server}/**/*!(*.stories|*.spec).{ts,tsx}',
  ],
  generates: {
    'libs/kjd/feature-blog/src/lib/generated/': {
      preset: 'client',
    },
  },
  ignoreNoDocuments: true,
};

export default config;

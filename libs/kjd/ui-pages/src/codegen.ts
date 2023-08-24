import { CodegenConfig } from '@graphql-codegen/cli';
import { createGlobPatternsForDependencies } from '@nx/js/src/utils/generate-globs';

const { KJD_HYGRAPH_ENDPOINT } = process.env;

const config: CodegenConfig = {
  schema: KJD_HYGRAPH_ENDPOINT,
  documents: [
    'lib/{client,server}/**/*!(*.stories|*.spec).{graphql,ts,tsx}',
    ...createGlobPatternsForDependencies(
      __dirname,
      'src/lib/**/*!(*.stories|*.spec).{graphql,ts,tsx}'
    ),
  ],
  generates: {
    'lib/generated/': {
      preset: 'client',
    },
  },
};

export default config;

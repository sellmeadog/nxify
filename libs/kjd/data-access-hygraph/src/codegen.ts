import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema:
    'https://us-west-2.cdn.hygraph.com/content/cl1avm9450g7701z3ewuledno/master',
  documents: 'lib/**/*.ts',
  generates: {
    'lib/generated/': {
      preset: 'client',
      config: {
        documentMode: 'string',
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;

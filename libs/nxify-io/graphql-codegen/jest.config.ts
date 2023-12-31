/* eslint-disable */
export default {
  displayName: 'nxify-io-graphql-codegen',
  preset: '../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/nxify-io/graphql-codegen',
};

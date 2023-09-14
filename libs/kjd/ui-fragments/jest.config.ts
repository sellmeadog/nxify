/* eslint-disable */
export default {
  displayName: 'kjd-ui-fragments',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: { syntax: 'typescript', tsx: true },
          transform: { react: { runtime: 'automatic' } },
        },
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    'react-markdown': 'react-markdown/react-markdown.min.js',
  },
  coverageDirectory: '../../../coverage/libs/kjd/ui-fragments',
};

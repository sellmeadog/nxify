import { makeHygraphClient } from './hygraph-client';

describe('dataAccessHygraph', () => {
  beforeAll(() => {
    process.env['KJD_HYGRAPH_ENDPOINT'] = 'https://hygraph.com/graphql';
  });

  it('should initialize default client', () => {
    expect(makeHygraphClient('https://hygraph.com/graphql'))
      .toMatchInlineSnapshot(`
      GraphQLClient {
        "rawRequest": [Function],
        "requestConfig": {},
        "url": "https://hygraph.com/graphql",
      }
    `);
  });

  it('should initialize with factory overrides', () => {
    expect(
      makeHygraphClient('http://localhost/graphql', {
        headers: { authorization: 'bearer token' },
      })
    ).toMatchInlineSnapshot(`
      GraphQLClient {
        "rawRequest": [Function],
        "requestConfig": {
          "headers": {
            "authorization": "bearer token",
          },
        },
        "url": "http://localhost/graphql",
      }
    `);
  });
});

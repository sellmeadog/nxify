import { GraphQLClient } from 'graphql-request';
import { RequestConfig } from 'graphql-request/build/esm/types';

const { KJD_HYGRAPH_ENDPOINT } = process.env;

export const makeHygraphClient = (
  url = KJD_HYGRAPH_ENDPOINT,
  config?: RequestConfig
) => {
  return new GraphQLClient(url, config);
};

export const hygraph = makeHygraphClient();

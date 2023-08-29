import { GraphQLClient } from 'graphql-request';

type GraphQLClientParams = ConstructorParameters<typeof GraphQLClient>;
type RequestConfig = GraphQLClientParams[1];

export function makeHygraphClient(
  endpoint = process.env['KJD_HYGRAPH_ENDPOINT'],
  requestConfig?: RequestConfig
) {
  return new GraphQLClient(endpoint, requestConfig);
}

export const hygraph = makeHygraphClient();

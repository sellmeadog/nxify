/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query HomePage {\n    ...ArticlePreviewList\n  }\n": types.HomePageDocument,
    "fragment ArticlePreview on Article {\n  author {\n    id\n    name\n  }\n  createdAt\n  excerpt\n  id\n  slug\n  title\n}": types.ArticlePreviewFragmentDoc,
    "fragment ArticlePreviewList on Query {\n  articles(first: 10, orderBy: createdAt_DESC) {\n    __typename\n    ...ArticlePreview\n  }\n}": types.ArticlePreviewListFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomePage {\n    ...ArticlePreviewList\n  }\n"): (typeof documents)["\n  query HomePage {\n    ...ArticlePreviewList\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ArticlePreview on Article {\n  author {\n    id\n    name\n  }\n  createdAt\n  excerpt\n  id\n  slug\n  title\n}"): (typeof documents)["fragment ArticlePreview on Article {\n  author {\n    id\n    name\n  }\n  createdAt\n  excerpt\n  id\n  slug\n  title\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ArticlePreviewList on Query {\n  articles(first: 10, orderBy: createdAt_DESC) {\n    __typename\n    ...ArticlePreview\n  }\n}"): (typeof documents)["fragment ArticlePreviewList on Query {\n  articles(first: 10, orderBy: createdAt_DESC) {\n    __typename\n    ...ArticlePreview\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
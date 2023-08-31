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
    "\n  fragment ArticleMetadataQuery on Query {\n    metadata: article(where: { slug: $slug }) {\n      author {\n        name\n      }\n      hero {\n        caption\n        title\n      }\n      tags {\n        tag\n      }\n    }\n  }\n": types.ArticleMetadataQueryFragmentDoc,
    "\n  query ArticleQuery($slug: String!) {\n    ...ArticleContentQuery\n    ...ArticleMetadataQuery\n  }\n": types.ArticleQueryDocument,
    "\n  fragment ArticleExplorerContent on ArticleExplorer {\n    first\n    id\n    subtitle\n    title\n  }\n": types.ArticleExplorerContentFragmentDoc,
    "\n  query RecentArticles($first: Int = 10) {\n    articles: articlesConnection(first: $first, orderBy: createdAt_DESC) {\n      edges {\n        node {\n          createdAt\n          hero {\n            caption\n            title\n          }\n          id\n          slug\n          tags {\n            slug\n            tag\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        pageSize\n        startCursor\n      }\n    }\n  }\n": types.RecentArticlesDocument,
    "\n  fragment HeroSectionContent on HeroSection {\n    caption\n    id\n    image {\n      url\n    }\n    subtitle\n    title\n  }\n": types.HeroSectionContentFragmentDoc,
    "\n  fragment ArticleContentQuery on Query {\n    article(where: { slug: $slug }) {\n      author {\n        avatar {\n          url\n        }\n        biography\n        name\n      }\n      body {\n        markdown\n      }\n      createdAt\n      hero {\n        ...HeroSectionContent\n      }\n      markdown\n    }\n  }\n": types.ArticleContentQueryFragmentDoc,
    "\n  query PageBySlug($slug: String = \"\") {\n    page(where: { slug: $slug }) {\n      hero {\n        ...HeroSectionContent\n      }\n      sections {\n        __typename\n        ... on ArticleExplorer {\n          ...ArticleExplorerContent\n        }\n        ... on TagExplorer {\n          id\n          first\n          subtitle\n          title\n        }\n      }\n    }\n  }\n": types.PageBySlugDocument,
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
export function graphql(source: "\n  fragment ArticleMetadataQuery on Query {\n    metadata: article(where: { slug: $slug }) {\n      author {\n        name\n      }\n      hero {\n        caption\n        title\n      }\n      tags {\n        tag\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ArticleMetadataQuery on Query {\n    metadata: article(where: { slug: $slug }) {\n      author {\n        name\n      }\n      hero {\n        caption\n        title\n      }\n      tags {\n        tag\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ArticleQuery($slug: String!) {\n    ...ArticleContentQuery\n    ...ArticleMetadataQuery\n  }\n"): (typeof documents)["\n  query ArticleQuery($slug: String!) {\n    ...ArticleContentQuery\n    ...ArticleMetadataQuery\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ArticleExplorerContent on ArticleExplorer {\n    first\n    id\n    subtitle\n    title\n  }\n"): (typeof documents)["\n  fragment ArticleExplorerContent on ArticleExplorer {\n    first\n    id\n    subtitle\n    title\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query RecentArticles($first: Int = 10) {\n    articles: articlesConnection(first: $first, orderBy: createdAt_DESC) {\n      edges {\n        node {\n          createdAt\n          hero {\n            caption\n            title\n          }\n          id\n          slug\n          tags {\n            slug\n            tag\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        pageSize\n        startCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query RecentArticles($first: Int = 10) {\n    articles: articlesConnection(first: $first, orderBy: createdAt_DESC) {\n      edges {\n        node {\n          createdAt\n          hero {\n            caption\n            title\n          }\n          id\n          slug\n          tags {\n            slug\n            tag\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        pageSize\n        startCursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HeroSectionContent on HeroSection {\n    caption\n    id\n    image {\n      url\n    }\n    subtitle\n    title\n  }\n"): (typeof documents)["\n  fragment HeroSectionContent on HeroSection {\n    caption\n    id\n    image {\n      url\n    }\n    subtitle\n    title\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ArticleContentQuery on Query {\n    article(where: { slug: $slug }) {\n      author {\n        avatar {\n          url\n        }\n        biography\n        name\n      }\n      body {\n        markdown\n      }\n      createdAt\n      hero {\n        ...HeroSectionContent\n      }\n      markdown\n    }\n  }\n"): (typeof documents)["\n  fragment ArticleContentQuery on Query {\n    article(where: { slug: $slug }) {\n      author {\n        avatar {\n          url\n        }\n        biography\n        name\n      }\n      body {\n        markdown\n      }\n      createdAt\n      hero {\n        ...HeroSectionContent\n      }\n      markdown\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PageBySlug($slug: String = \"\") {\n    page(where: { slug: $slug }) {\n      hero {\n        ...HeroSectionContent\n      }\n      sections {\n        __typename\n        ... on ArticleExplorer {\n          ...ArticleExplorerContent\n        }\n        ... on TagExplorer {\n          id\n          first\n          subtitle\n          title\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query PageBySlug($slug: String = \"\") {\n    page(where: { slug: $slug }) {\n      hero {\n        ...HeroSectionContent\n      }\n      sections {\n        __typename\n        ... on ArticleExplorer {\n          ...ArticleExplorerContent\n        }\n        ... on TagExplorer {\n          id\n          first\n          subtitle\n          title\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
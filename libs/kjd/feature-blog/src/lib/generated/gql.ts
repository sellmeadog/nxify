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
    "query ArticlePageRouteParams {\n  params: articles(stage: PUBLISHED) {\n    slug\n  }\n}": types.ArticlePageRouteParamsDocument,
    "\n  query ArticleBySlug($slug: String!) {\n    article(where: { slug: $slug }) {\n      ...ArticleHero\n      ...ArticleBody\n    }\n  }\n": types.ArticleBySlugDocument,
    "\n  query PageQuery($slug: String) {\n    ...PageContentQueryFragment\n  }\n": types.PageQueryDocument,
    "fragment ArticleMetadata on Article {\n  author {\n    name\n  }\n  createdAt\n  excerpt\n  tags {\n    tag\n  }\n  title\n}\n\nquery ArticleMetadataBySlug($slug: String) {\n  article(where: {slug: $slug}) {\n    ...ArticleMetadata\n  }\n}": types.ArticleMetadataFragmentDoc,
    "fragment ArticleBody on Article {\n  body {\n    raw\n  }\n}": types.ArticleBodyFragmentDoc,
    "fragment ArticleHero on Article {\n  author {\n    name\n    picture\n  }\n  createdAt\n  title\n}": types.ArticleHeroFragmentDoc,
    "fragment ArticlePreviewList on Query {\n  articles(first: 10, orderBy: createdAt_DESC) {\n    __typename\n    ...ArticlePreview\n  }\n}": types.ArticlePreviewListFragmentDoc,
    "fragment ArticlePreview on Article {\n  author {\n    id\n    name\n  }\n  createdAt\n  excerpt\n  id\n  slug\n  title\n}": types.ArticlePreviewFragmentDoc,
    "\n  fragment ArticleExplorerSectionFragment on ArticleExplorer {\n    first\n    id\n    subtitle\n    title\n  }\n": types.ArticleExplorerSectionFragmentFragmentDoc,
    "\n  query ArticleExplorerQuery($first: Int) {\n    articlesConnection(first: $first, orderBy: createdAt_DESC) {\n      edges {\n        cursor\n        node {\n          ...ArticlePreviewFragment\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        pageSize\n        startCursor\n      }\n    }\n  }\n": types.ArticleExplorerQueryDocument,
    "\n  fragment ArticlePreviewFragment on Article {\n    author {\n      name\n    }\n    createdAt\n    hero {\n      caption\n      title\n      subtitle\n    }\n    id\n    slug\n  }\n": types.ArticlePreviewFragmentFragmentDoc,
    "\n  fragment PageContentQueryFragment on Query {\n    page(where: { slug: $slug }) {\n      ...PageHeroFragment\n      ...PageSectionExplorerFragment\n    }\n  }\n": types.PageContentQueryFragmentFragmentDoc,
    "\n  fragment PageHeroFragment on Page {\n    hero {\n      caption\n      image {\n        url\n      }\n      subtitle\n      title\n    }\n  }\n": types.PageHeroFragmentFragmentDoc,
    "\n  fragment PageSectionExplorerFragment on Page {\n    sections {\n      __typename\n      ...ArticleExplorerSectionFragment\n    }\n  }\n": types.PageSectionExplorerFragmentFragmentDoc,
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
export function graphql(source: "query ArticlePageRouteParams {\n  params: articles(stage: PUBLISHED) {\n    slug\n  }\n}"): (typeof documents)["query ArticlePageRouteParams {\n  params: articles(stage: PUBLISHED) {\n    slug\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ArticleBySlug($slug: String!) {\n    article(where: { slug: $slug }) {\n      ...ArticleHero\n      ...ArticleBody\n    }\n  }\n"): (typeof documents)["\n  query ArticleBySlug($slug: String!) {\n    article(where: { slug: $slug }) {\n      ...ArticleHero\n      ...ArticleBody\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PageQuery($slug: String) {\n    ...PageContentQueryFragment\n  }\n"): (typeof documents)["\n  query PageQuery($slug: String) {\n    ...PageContentQueryFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ArticleMetadata on Article {\n  author {\n    name\n  }\n  createdAt\n  excerpt\n  tags {\n    tag\n  }\n  title\n}\n\nquery ArticleMetadataBySlug($slug: String) {\n  article(where: {slug: $slug}) {\n    ...ArticleMetadata\n  }\n}"): (typeof documents)["fragment ArticleMetadata on Article {\n  author {\n    name\n  }\n  createdAt\n  excerpt\n  tags {\n    tag\n  }\n  title\n}\n\nquery ArticleMetadataBySlug($slug: String) {\n  article(where: {slug: $slug}) {\n    ...ArticleMetadata\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ArticleBody on Article {\n  body {\n    raw\n  }\n}"): (typeof documents)["fragment ArticleBody on Article {\n  body {\n    raw\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ArticleHero on Article {\n  author {\n    name\n    picture\n  }\n  createdAt\n  title\n}"): (typeof documents)["fragment ArticleHero on Article {\n  author {\n    name\n    picture\n  }\n  createdAt\n  title\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ArticlePreviewList on Query {\n  articles(first: 10, orderBy: createdAt_DESC) {\n    __typename\n    ...ArticlePreview\n  }\n}"): (typeof documents)["fragment ArticlePreviewList on Query {\n  articles(first: 10, orderBy: createdAt_DESC) {\n    __typename\n    ...ArticlePreview\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ArticlePreview on Article {\n  author {\n    id\n    name\n  }\n  createdAt\n  excerpt\n  id\n  slug\n  title\n}"): (typeof documents)["fragment ArticlePreview on Article {\n  author {\n    id\n    name\n  }\n  createdAt\n  excerpt\n  id\n  slug\n  title\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ArticleExplorerSectionFragment on ArticleExplorer {\n    first\n    id\n    subtitle\n    title\n  }\n"): (typeof documents)["\n  fragment ArticleExplorerSectionFragment on ArticleExplorer {\n    first\n    id\n    subtitle\n    title\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ArticleExplorerQuery($first: Int) {\n    articlesConnection(first: $first, orderBy: createdAt_DESC) {\n      edges {\n        cursor\n        node {\n          ...ArticlePreviewFragment\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        pageSize\n        startCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query ArticleExplorerQuery($first: Int) {\n    articlesConnection(first: $first, orderBy: createdAt_DESC) {\n      edges {\n        cursor\n        node {\n          ...ArticlePreviewFragment\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        pageSize\n        startCursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ArticlePreviewFragment on Article {\n    author {\n      name\n    }\n    createdAt\n    hero {\n      caption\n      title\n      subtitle\n    }\n    id\n    slug\n  }\n"): (typeof documents)["\n  fragment ArticlePreviewFragment on Article {\n    author {\n      name\n    }\n    createdAt\n    hero {\n      caption\n      title\n      subtitle\n    }\n    id\n    slug\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PageContentQueryFragment on Query {\n    page(where: { slug: $slug }) {\n      ...PageHeroFragment\n      ...PageSectionExplorerFragment\n    }\n  }\n"): (typeof documents)["\n  fragment PageContentQueryFragment on Query {\n    page(where: { slug: $slug }) {\n      ...PageHeroFragment\n      ...PageSectionExplorerFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PageHeroFragment on Page {\n    hero {\n      caption\n      image {\n        url\n      }\n      subtitle\n      title\n    }\n  }\n"): (typeof documents)["\n  fragment PageHeroFragment on Page {\n    hero {\n      caption\n      image {\n        url\n      }\n      subtitle\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PageSectionExplorerFragment on Page {\n    sections {\n      __typename\n      ...ArticleExplorerSectionFragment\n    }\n  }\n"): (typeof documents)["\n  fragment PageSectionExplorerFragment on Page {\n    sections {\n      __typename\n      ...ArticleExplorerSectionFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
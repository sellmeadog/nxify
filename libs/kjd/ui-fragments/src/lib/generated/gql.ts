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
    "\n  fragment ArticleAuthorFragment on Article {\n    author {\n      avatar {\n        url\n      }\n      biography\n      name\n      socialIcons {\n        href\n        network\n      }\n    }\n  }\n": types.ArticleAuthorFragmentFragmentDoc,
    "\n  fragment ArticleContentQueryFragment on Query {\n    article(where: { slug: $slug }) {\n      ...ArticleHeroFragment\n      ...ArticleMarkdownFragment\n      ...ArticleAuthorFragment\n    }\n  }\n": types.ArticleContentQueryFragmentFragmentDoc,
    "\n  fragment ArticleExplorerSectionFragment on ArticleExplorer {\n    first\n    id\n    subtitle\n    title\n  }\n": types.ArticleExplorerSectionFragmentFragmentDoc,
    "\n  query ArticleExplorerQuery($first: Int) {\n    articlesConnection(first: $first, orderBy: createdAt_DESC) {\n      edges {\n        cursor\n        node {\n          ...ArticlePreviewFragment\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        pageSize\n        startCursor\n      }\n    }\n  }\n": types.ArticleExplorerQueryDocument,
    "\n  fragment ArticleHeroFragment on Article {\n    createdAt\n    hero {\n      caption\n      image {\n        url\n      }\n      subtitle\n      title\n    }\n  }\n": types.ArticleHeroFragmentFragmentDoc,
    "\n  fragment ArticleMarkdownFragment on Article {\n    markdown\n  }\n": types.ArticleMarkdownFragmentFragmentDoc,
    "\n  fragment ArticlePreviewFragment on Article {\n    author {\n      name\n    }\n    createdAt\n    hero {\n      caption\n      title\n      subtitle\n    }\n    id\n    slug\n  }\n": types.ArticlePreviewFragmentFragmentDoc,
    "\n  fragment PageContentQueryFragment on Query {\n    page(where: { slug: $slug }) {\n      ...PageHeroFragment\n      ...PageSectionExplorerFragment\n    }\n  }\n": types.PageContentQueryFragmentFragmentDoc,
    "\n  fragment PageHeroFragment on Page {\n    hero {\n      caption\n      image {\n        url\n      }\n      subtitle\n      title\n    }\n  }\n": types.PageHeroFragmentFragmentDoc,
    "\n  fragment PageSectionExplorerFragment on Page {\n    sections {\n      __typename\n      ...ArticleExplorerSectionFragment\n    }\n  }\n": types.PageSectionExplorerFragmentFragmentDoc,
    "\n  query PageQuery($slug: String) {\n    ...PageContentQueryFragment\n  }\n": types.PageQueryDocument,
    "\n  query PageMetadataQuery($slug: String) {\n    metadata(where: { id: \"clm9qf5ek1hnk0amzfuxh62yf\" }) {\n      id\n      open {\n        description\n        image {\n          url\n        }\n        title\n        url\n      }\n      site {\n        description\n        title\n      }\n      twitter {\n        card\n        description\n        image {\n          url\n        }\n        title\n      }\n    }\n    page(where: { slug: $slug }) {\n      createdAt\n      hero {\n        caption\n        title\n      }\n    }\n  }\n": types.PageMetadataQueryDocument,
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
export function graphql(source: "\n  fragment ArticleAuthorFragment on Article {\n    author {\n      avatar {\n        url\n      }\n      biography\n      name\n      socialIcons {\n        href\n        network\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ArticleAuthorFragment on Article {\n    author {\n      avatar {\n        url\n      }\n      biography\n      name\n      socialIcons {\n        href\n        network\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ArticleContentQueryFragment on Query {\n    article(where: { slug: $slug }) {\n      ...ArticleHeroFragment\n      ...ArticleMarkdownFragment\n      ...ArticleAuthorFragment\n    }\n  }\n"): (typeof documents)["\n  fragment ArticleContentQueryFragment on Query {\n    article(where: { slug: $slug }) {\n      ...ArticleHeroFragment\n      ...ArticleMarkdownFragment\n      ...ArticleAuthorFragment\n    }\n  }\n"];
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
export function graphql(source: "\n  fragment ArticleHeroFragment on Article {\n    createdAt\n    hero {\n      caption\n      image {\n        url\n      }\n      subtitle\n      title\n    }\n  }\n"): (typeof documents)["\n  fragment ArticleHeroFragment on Article {\n    createdAt\n    hero {\n      caption\n      image {\n        url\n      }\n      subtitle\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ArticleMarkdownFragment on Article {\n    markdown\n  }\n"): (typeof documents)["\n  fragment ArticleMarkdownFragment on Article {\n    markdown\n  }\n"];
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
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PageQuery($slug: String) {\n    ...PageContentQueryFragment\n  }\n"): (typeof documents)["\n  query PageQuery($slug: String) {\n    ...PageContentQueryFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PageMetadataQuery($slug: String) {\n    metadata(where: { id: \"clm9qf5ek1hnk0amzfuxh62yf\" }) {\n      id\n      open {\n        description\n        image {\n          url\n        }\n        title\n        url\n      }\n      site {\n        description\n        title\n      }\n      twitter {\n        card\n        description\n        image {\n          url\n        }\n        title\n      }\n    }\n    page(where: { slug: $slug }) {\n      createdAt\n      hero {\n        caption\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query PageMetadataQuery($slug: String) {\n    metadata(where: { id: \"clm9qf5ek1hnk0amzfuxh62yf\" }) {\n      id\n      open {\n        description\n        image {\n          url\n        }\n        title\n        url\n      }\n      site {\n        description\n        title\n      }\n      twitter {\n        card\n        description\n        image {\n          url\n        }\n        title\n      }\n    }\n    page(where: { slug: $slug }) {\n      createdAt\n      hero {\n        caption\n        title\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
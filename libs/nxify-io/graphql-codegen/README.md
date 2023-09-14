# @nxify-io/graphql-codegen

An Nx plugin to use the GraphQL Code Generator in an Nx workspace. Currently, the `client preset` is configured by default.

## Getting Started

This plugin assumes you already have an Nx workspace and at least one library where you intend to configure code generation.

Install the plugin:

```
yarn add -D @nxify-io/graphql-codegen
```

## Generate Configuration

The `configuration` generator will configure a project in the workspace with a `codegen.ts` file and `codegen` executor target.

### @nxify-io/graphql-codegen:configuration

Adds the GraphQL Code Generator configuration files for a given project and, if needed, installs the necessary packages for the GraphQL Code Generator to work.

### Usage

```
nx generate @nxify-io/graphql-codegen:configuration --project=my-project
```

By default, this generator will create a `codegen.ts` file in the project root configured with the `client preset` and to generate source files in `{projectRoot}/src/lib/generated`.

## Run the Code Generator

The `codegen` executor will handle running `graphql-codegen` with the project specific `codegen.ts` configuration.

## @nxify-io/graphql-codegen:codegen

Runs `graphql-codegen` in the current project.

### Options

Valid `graphql-codegen` options can be configured in `project.json` when defining the executor or when invoking it. Currently `watch` is the only officially supported option and any additional options will be passed to the process.

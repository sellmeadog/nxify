import {
  formatFiles,
  generateFiles,
  readProjectConfiguration,
  Tree,
  updateProjectConfiguration,
} from '@nx/devkit';
import { ConfigurationGeneratorSchema } from './schema';
import { join } from 'path';

export function normalizeOptions(
  tree: Tree,
  {
    outputPath = 'src/lib/generated/',
    schema = 'SCHEMA_ENDPOINT',
    skipClientPreset = false,
    ...rest
  }: ConfigurationGeneratorSchema
): ConfigurationGeneratorSchema {
  const project = readProjectConfiguration(tree, rest.project);

  return {
    outputPath: ensureTrailingSlash(join(project.root, outputPath)),
    schema,
    schemaIsEnvironmentVariable: !schema.startsWith('http'),
    skipClientPreset,
    ...rest,
  };
}

function ensureTrailingSlash(path: string) {
  return path.endsWith('/') ? path : `${path}/`;
}

function validateCodegenTarget(
  tree: Tree,
  options: ConfigurationGeneratorSchema
) {
  if (options.skipValidation) {
    return;
  }

  const project = readProjectConfiguration(tree, options.project);

  if (project.targets?.['codegen']) {
    throw new Error(
      `Project "${options.project}" already has a "codegen" target. Pass --skipValidation to ignore this error.`
    );
  }
}

function addCodegenTarget(tree: Tree, options: ConfigurationGeneratorSchema) {
  validateCodegenTarget(tree, options);

  const project = readProjectConfiguration(tree, options.project);

  updateProjectConfiguration(tree, options.project, {
    ...project,
    targets: {
      ...project.targets,
      codegen: {
        executor: '@nxify/graphql-codegen:codegen',
        options: {
          config: '{projectRoot}/codegen.ts',
        },
        dependsOn: ['^codegen'],
      },
    },
  });
}

export async function configurationGenerator(
  tree: Tree,
  schema: ConfigurationGeneratorSchema
) {
  const options = normalizeOptions(tree, schema);
  const project = readProjectConfiguration(tree, options.project);

  addCodegenTarget(tree, schema);
  generateFiles(tree, join(__dirname, 'files'), project.root, {
    ...options,
    ...project,
    ts: 'ts',
  });

  await formatFiles(tree);
}

export default configurationGenerator;

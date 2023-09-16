import {
  formatFiles,
  generateFiles,
  readProjectConfiguration,
  Tree,
  updateProjectConfiguration,
} from '@nx/devkit';
import { ConfigurationGeneratorSchema } from './schema';
import { join, sep } from 'path';
import initGenerator from '../init/generator';

export function normalizeOptions(
  tree: Tree,
  {
    outputPath = 'src/lib/generated/',
    schema = 'SCHEMA_ENDPOINT',
    skipClientPreset = false,
    unmaskFunctionName = 'unmaskFragment',
    ...rest
  }: ConfigurationGeneratorSchema
): ConfigurationGeneratorSchema {
  const project = readProjectConfiguration(tree, rest.project);
  const schemaIsPathOrURL = isPathOrUrlLike(schema);

  return {
    outputPath: ensureTrailingSlash(project.root, outputPath),
    schema,
    schemaIsPathOrURL,
    skipClientPreset,
    unmaskFunctionName,
    ...rest,
  };
}

function ensureTrailingSlash(...paths: string[]) {
  const path = join(...paths);

  if (path.endsWith(sep)) {
    return path;
  }

  return path + sep;
}

function isPathOrUrlLike(value: string) {
  if (value.startsWith('http') || value.includes(sep)) {
    return true;
  }

  return false;
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
        executor: '@nxify-io/graphql-codegen:codegen',
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
  const init = initGenerator(tree, { skipFormat: true });
  const options = normalizeOptions(tree, schema);
  const project = readProjectConfiguration(tree, options.project);

  addCodegenTarget(tree, schema);
  generateFiles(tree, join(__dirname, 'files'), project.root, {
    ...options,
    ...project,
    ts: 'ts',
  });

  await formatFiles(tree);

  return init;
}

export default configurationGenerator;

import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ConfigurationGeneratorSchema } from './schema';

export function normalizeOptions({
  schema,
  ...rest
}: ConfigurationGeneratorSchema) {
  return {
    schema: schema ?? 'process.env.GRAPH_ENDPOINT',
    ...rest,
  };
}

export async function configurationGenerator(
  tree: Tree,
  schema: ConfigurationGeneratorSchema
) {
  const options = normalizeOptions(schema);
  const project = readProjectConfiguration(tree, options.project);

  generateFiles(tree, path.join(__dirname, 'files'), project.root, {
    ...options,
    ...project,
    ts: 'ts',
  });

  await formatFiles(tree);
}

export default configurationGenerator;

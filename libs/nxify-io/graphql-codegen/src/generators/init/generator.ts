import { addDependenciesToPackageJson, formatFiles, Tree } from '@nx/devkit';
import { InitGeneratorSchema } from './schema';
import {
  clinetPresetVersion,
  cliVersion,
  graphqlVersion,
} from '../../lib/versions';

export async function initGenerator(
  tree: Tree,
  { skipFormat }: InitGeneratorSchema
) {
  const task = addDependenciesToPackageJson(
    tree,
    { graphql: graphqlVersion },
    {
      '@graphql-codegen/cli': cliVersion,
      '@graphql-codegen/client-preset': clinetPresetVersion,
    }
  );

  if (!skipFormat) {
    await formatFiles(tree);
  }

  return task;
}

export default initGenerator;

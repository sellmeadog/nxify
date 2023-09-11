import { generate, createContext } from '@graphql-codegen/cli';
import { CodegenExecutorSchema } from './schema';
import { logger } from '@nx/devkit';

export default async function runExecutor({
  config,
  watch = false,
  ...rest
}: CodegenExecutorSchema) {
  try {
    const context = await createContext({
      config,
      watch,
      ...rest,
    });

    const output = await generate(context);

    return {
      success: true,
      output,
    };
  } catch (error) {
    logger.error(error.message);
  }

  return { success: false };
}

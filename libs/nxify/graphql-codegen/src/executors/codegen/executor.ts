import { generate, createContext } from '@graphql-codegen/cli';
import { CodegenExecutorSchema } from './schema';

export default async function runExecutor(options: CodegenExecutorSchema) {
  const context = await createContext({
    ...options,
    watch: options.watch ?? false,
  });

  const output = await generate(context);

  return {
    success: true,
    output,
  };
}

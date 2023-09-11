import { YamlCliFlags } from '@graphql-codegen/cli';

export interface CodegenExecutorSchema extends YamlCliFlags {
  config: string;
  watch?: boolean;
}

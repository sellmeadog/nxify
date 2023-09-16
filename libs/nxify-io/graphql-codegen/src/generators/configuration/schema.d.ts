export interface ConfigurationGeneratorSchema {
  outputPath?: string;
  project: string;
  schema?: string;
  schemaIsPathOrURL?: boolean;
  skipClientPreset?: boolean;
  skipValidation?: boolean;
  unmaskFunctionName?: string;
}

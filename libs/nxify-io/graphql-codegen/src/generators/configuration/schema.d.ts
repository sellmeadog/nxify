export interface ConfigurationGeneratorSchema {
  outputPath?: string;
  project: string;
  schema?: string;
  schemaIsEnvironmentVariable?: boolean;
  skipClientPreset?: boolean;
  skipValidation?: boolean;
}

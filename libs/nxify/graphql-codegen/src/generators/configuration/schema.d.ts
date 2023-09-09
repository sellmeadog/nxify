export interface ConfigurationGeneratorSchema {
  outputPath?: string;
  project: string;
  schema?: string;
  skipClientPreset?: boolean;
}

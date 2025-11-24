import * as path from 'node:path';

const GENERATOR_PATH = path.dirname(new URL(import.meta.url).pathname);

export const config = {
  samplesPath: path.resolve(GENERATOR_PATH, 'samples'),
  objectsPath: path.resolve(GENERATOR_PATH, 'objects.json'),
  outputPath: path.resolve(GENERATOR_PATH, '..', 'src'),
} as const;

export type Operation = 'list' | 'get' | 'create' | 'update' | 'delete' | 'count';

export interface EntityConfig {
  path: string;
  operations: Operation[];
}

export interface ObjectsMap {
  [key: string]: EntityConfig;
}

export interface SampleData {
  name: string;
  apiPath: string;
  operations: Operation[];
  sample: unknown;
}

export interface NamespaceGroup {
  namespace: string;
  items: SampleData[];
}

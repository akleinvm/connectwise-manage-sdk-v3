import * as path from 'node:path';

const GENERATOR_PATH = path.dirname(new URL(import.meta.url).pathname);

export const config = {
  samplesPath: path.resolve(GENERATOR_PATH, 'samples'),
  objectsPath: path.resolve(GENERATOR_PATH, 'objects.json'),
  outputPath: path.resolve(GENERATOR_PATH, '..', 'src'),
} as const;

export interface ObjectsMap {
  [key: string]: string;
}

export interface SampleData {
  name: string;
  apiPath: string;
  sample: unknown;
}

export interface NamespaceGroup {
  namespace: string;
  items: SampleData[];
}

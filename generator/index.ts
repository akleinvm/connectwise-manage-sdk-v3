import * as fs from 'node:fs';
import * as path from 'node:path';

import { config, type ObjectsMap, type SampleData, type NamespaceGroup } from './config.js';
import { getNamespace } from './utils.js';
import { generateTypes } from './generators/types.js';
import { generateResources } from './generators/resources.js';
import { generateNamespaces } from './generators/namespaces.js';
import { generateClient } from './generators/client.js';

// --- Data Loading ---

const loadObjects = (): ObjectsMap => {
  console.log('Loading objects.json...');
  return JSON.parse(fs.readFileSync(config.objectsPath, 'utf-8'));
};

const loadSamples = (objects: ObjectsMap): SampleData[] => {
  console.log('Loading samples...');

  return Object.entries(objects).map(([name, apiPath]) => {
    const samplePath = path.resolve(config.samplesPath, `${name}.json`);

    try {
      const content = fs.readFileSync(samplePath, 'utf-8');
      const corrected = content.replace(/-?\d*\.\d+/g, '9.99');
      return { name, apiPath, sample: JSON.parse(corrected) };
    } catch {
      console.warn(`  Warning: Sample not found for ${name}`);
      return { name, apiPath, sample: null };
    }
  });
};

// --- Data Transformation ---

const groupByNamespace = (samples: SampleData[]): NamespaceGroup[] => {
  const groups = new Map<string, SampleData[]>();

  for (const sample of samples) {
    const namespace = getNamespace(sample.apiPath);
    if (!groups.has(namespace)) {
      groups.set(namespace, []);
    }
    groups.get(namespace)!.push(sample);
  }

  return Array.from(groups.entries()).map(([namespace, items]) => ({
    namespace,
    items,
  }));
};

// --- File Output ---

const ensureDir = (dirPath: string): void => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const writeOutput = (output: {
  types: string;
  resources: string;
  namespaces: string;
  client: string;
  index: string;
}): void => {
  console.log('Writing output files...');

  const typesDir = path.resolve(config.outputPath, 'types');
  const resourcesDir = path.resolve(config.outputPath, 'resources');
  const namespacesDir = path.resolve(config.outputPath, 'namespaces');

  ensureDir(typesDir);
  ensureDir(resourcesDir);
  ensureDir(namespacesDir);

  fs.writeFileSync(path.resolve(typesDir, 'generated.ts'), output.types);
  fs.writeFileSync(path.resolve(resourcesDir, 'generated.ts'), output.resources);
  fs.writeFileSync(path.resolve(namespacesDir, 'generated.ts'), output.namespaces);
  fs.writeFileSync(path.resolve(config.outputPath, 'client.ts'), output.client);
  fs.writeFileSync(path.resolve(config.outputPath, 'index.ts'), output.index);
};

const generateIndex = (): string => `// ConnectWise Manage SDK
// Auto-generated - do not edit manually

export { ConnectWiseClient } from './client.js';
export type { ClientConfig } from './http.js';
export * from './types/generated.js';
export * from './query/types.js';
export * from './errors.js';
`;

// --- Main Pipeline ---

const generate = (): void => {
  // Load
  const objects = loadObjects();
  const samples = loadSamples(objects);
  const namespaceGroups = groupByNamespace(samples);

  // Generate
  console.log('Generating code...');
  const types = generateTypes(samples);
  const resources = generateResources(objects);
  const namespaces = generateNamespaces(namespaceGroups);
  const client = generateClient(namespaceGroups);
  const index = generateIndex();

  // Write
  writeOutput({ types, resources, namespaces, client, index });

  console.log('Generation complete!');
};

generate();

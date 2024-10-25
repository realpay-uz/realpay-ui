import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';

// helpers
import { map } from '../../.map.ts';

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  source: createMDXSource(map),
});
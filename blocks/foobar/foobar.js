// https://github.com/markszulc/securbank-aem-ue/blob/main/blocks/feature/feature.js
// Make sure to update paths.json with a placeholder key/value
// "/content/aem-wknd-eds-ue/placeholders:/placeholders.json"

import { fetchPlaceholders } from '../../scripts/aem.js';

export default async function decorate(block) {
  const placeholders = await fetchPlaceholders('');
  const { foo, bar } = placeholders;
  console.log(block);
  console.log('foo', foo);
  console.log('bar', bar);
}

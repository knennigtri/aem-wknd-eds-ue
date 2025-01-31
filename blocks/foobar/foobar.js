//https://github.com/markszulc/securbank-aem-ue/blob/main/blocks/feature/feature.js
import { fetchPlaceholders } from '../../scripts/aem.js';


export default async function decorate(block) {
    const placeholders = await fetchPlaceholders('');
    const { foo,bar } = placeholders;
    console.log('foo', foo);
    console.log('bar', bar);

}
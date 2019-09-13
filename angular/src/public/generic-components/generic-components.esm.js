import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-14fa86c3.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["accesibility-text-component",[[1,"accesibility-text-component",{"lang":[1]}]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

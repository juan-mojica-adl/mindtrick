import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'generic-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  copy: [{
    src: "**/*.i18n.*.json",
    dest: "i18n"
  },
  {
    src: "**/*config-components.*.json",
    dest: "config"
  }]
};

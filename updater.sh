#!/bin/bash


#getComponents

rm -rf /Users/juan.orjuela/repos/test/

cd /Users/juan.orjuela/repos/components/generic-components
npm install
stencil build --dev

git clone $1 /Users/juan.orjuela/repos/test/
cd /Users/juan.orjuela/repos/test/

mkdir -p /Users/juan.orjuela/repos/test/src/public/
cp -R /Users/juan.orjuela/repos/components/generic-components/dist/* /Users/juan.orjuela/repos/test/src/public/

mkdir -p /Users/juan.orjuela/repos/test/src/i18n/
cp -R /Users/juan.orjuela/repos/components/generic-components/dist/collection/i18n/* /Users/juan.orjuela/repos/test/src/i18n/

mkdir -p /Users/juan.orjuela/repos/test/src/config/
cp /Users/juan.orjuela/config-components.celula.json /Users/juan.orjuela/repos/test/src/config/config-components.celula.json

npm install
ng serve








